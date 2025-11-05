import joblib
import os
import random

#Đường dẫn đến model
BASE_DIR = os.path.dirname(__file__)
MODEL_DIR = os.path.join(BASE_DIR,"../" ,"assets", "chatbot_model.pkl")

try:
    print("Đang tải mô hình...")
    model_data = joblib.load(MODEL_DIR)
    print("Mô hình đã tải thành công.")

    model = model_data["model"]
    vec = model_data["vectorizer"]
    responses = model_data['responses_map']
except Exception as e:
    print(f"Không thể tải mô hình: {e}")
    model, vec, responses = None, None, {}

def processReply(message: str) -> str:
    if not model or not vec or not responses:
        return "Mô hình chưa sẵn sàng để sử dụng."

    text_vec = vec.transform([message.lower()])
    tag = model.predict(text_vec)[0]
    conf = model.predict_proba(text_vec).max()

    if tag in responses and conf > 0.1:
        return random.choice(responses[tag])
    else:
        return "Xin lỗi, tôi không hiểu."