import os
from flask_cors import CORS
from flask import Flask, request, jsonify
from config.db import client
from dotenv import load_dotenv
from controller.message_controller import sendReply, getAllMessage, change_Weight

load_dotenv()

PORT = int(os.getenv("PORT", 5000)) 

app = Flask(__name__)
CORS(app, origins=["*"], supports_credentials=True)
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message" : "hello world"})

@app.route("/api/message/<string:user_id>", methods=["GET"])
def chat(user_id):
    return getAllMessage(user_id)
        
@app.route("/api/weight", methods=["POST"])
def changeWeight():
    return change_Weight()

@app.route("/api/message", methods=["POST"])
def sendChat():
    return sendReply()

if __name__ == "__main__":
    if client is not None:
        print(f"Server đang lắng nghe trên cổng {PORT}.")
        app.run(host="0.0.0.0", port=PORT, debug=False)
        
