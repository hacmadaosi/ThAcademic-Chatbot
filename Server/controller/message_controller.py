from flask import request, jsonify
from config.model import processReply
from models.Message import Message
from config.db import client
from bson import ObjectId

def db(document):
    db = client["chatbot_db"]
    return db[document]

def sendReply():
    data = request.get_json()
    message = data.get("message")
    userID = data.get("userId")
    
    bot_reply = processReply(message)
    msg = Message(message, bot_reply, userID)
    db("messages").insert_one(msg.to_dict())

    return jsonify(msg.to_dict())

def getAllMessage(user_id):
    try:
        messages = list(db("messages").find({"user_id": user_id}))
        return jsonify(messages)
    except Exception as e:
        print(e)
        return jsonify({"message": "Lỗi khi lấy hội thoại"})

def change_Weight():
    try:
        data = request.get_json()
        _id = data.get("_id")
        db_messages = db("messages") 
        document = db_messages.find_one({"_id": _id})
        if(document):
            new_value = 0 if document.get("weights") == 1 else 1
            db_messages.update_one(
            {"_id": _id},
            {"$set": {"weights": new_value}}
        )
        else :
            return jsonify({"message" : f"Không tìm thấy nội dung" })
        
        return jsonify({"message" : f"Đã thay đổi trọng số"})
        

    except Exception as e:
        print(e)
        return jsonify({"message": "Lỗi khi thay đổi trọng số"})