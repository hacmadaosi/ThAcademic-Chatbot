from flask import request, jsonify
from config.model import processReply
from models.Message import Message

from config.db import client




def sendReply():
    data = request.get_json()
    message = data.get("message")
    userID = data.get("userID")
    
    bot_reply = processReply(message)
    msg = Message(message, bot_reply, userID)

    db = client["chatbot_db"]
    message_collection = db["messages"]
    message_collection.insert_one(msg.to_dict())

    return jsonify(msg.to_dict())

def getAllMessage():
    data = request.get_json()