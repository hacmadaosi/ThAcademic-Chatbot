from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = None

def ConnectDB():
    global client
    if client is None:
        try:
            client = MongoClient(os.getenv("MONGO_CONNECT_STRING"))
            client.server_info()
            print("Kết nối đến cơ sở dữ liệu thành công.")
        except Exception as e:
            print("Kết nối đến cơ sở dữ liệu không thành công:", e)
            client = None
    return client

ConnectDB()