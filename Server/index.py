import os
from flask_cors import CORS
from flask import Flask, request, jsonify
from config.db import client
from dotenv import load_dotenv
from controller.message_controller import sendReply

load_dotenv()

PORT = int(os.getenv("PORT", 5000)) 

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message" : "hello world"})

@app.route("/api/message", methods=["POST"])
def chat():
    return sendReply()

if __name__ == "__main__":
    if client is not None:
        print(f"Server đang lắng nghe trên cổng {PORT}.")
        app.run(host="0.0.0.0", port=PORT, debug=True)
        
