## Chatbot Tư vấn Học vụ

    Dự án này là một chatbot AI đơn giản, được huấn luyện để trả lời các câu hỏi thường gặp của sinh viên về chủ đề học vụ (ví dụ: thời khóa biểu, học phí, lịch thi, thủ tục...).
    Chatbot sửa dụng mô hình Machine Learning là RandomForest từ scikit-learn để phân loại ý định (intent) của người dùng và đưa ra câu trả lời phù hợp.

## Các Công nghệ sử dụng

- **Python 3.x**
- **Pandas:** Để đọc và xử lý file `dataset.json`.
- **Scikit-learn:** Để:
  - **TfidfVectorizer:** Mã hóa văn bản dựa trên tần suất.
  - **RandomForestClassifier:** Huấn luyện mô hình phân loại.
  - **train_test_split:** Chia và đánh giá mô hình.
- **Joblib:** Để lưu và tải các mô hình đã huấn luyện (`.joblib` hoặc `.pkl`).

## Cài đặt

**Yêu cầu:** Để cài đặt môi trường, trên máy người dùng phải có **Python** (phiên bản 3.x) và một **Python IDE** (như VS Code, PyCharm,...) hoặc trình soạn thảo code.

#### 1. Sao chép (clone) dự án này về máy của bạn.

di chuyển đến thư mục chứa

#### 2. Tạo một môi trường ảo (khuyên dùng):

```bash
python -m venv .venv
```

(Kích hoạt môi trường ảo: `.\.venv\Scripts\activate` trên Windows hoặc source `.venv/bin/activate` trên MacOS/Linux)

#### 3. Cài đặt các thư viện cần thiết:

```bash
pip install -r requirements.txt
```

## Cách sử dụng

- Sử dụng **Jupyter Notebook** hoặc **IDE hỗ trợ notebook** (như VS Code, PyCharm,...).

- Chạy lần lượt **các ô mã (Code Cell)** trong file, **ngoại trừ** phần có tiêu đề:

  > **Mô hình ngữ nghĩa (embedding-based models)**

  > Bỏ qua toàn bộ nội dung trong mục này.

- Khi quá trình chạy hoàn tất và xuất hiện file: `chatbot_model.pkl` nghĩa là mô hình đã được huấn luyện và lưu thành công.
- Tiếp theo, **chạy ô mã cuối cùng** trong notebook.  
  Ở bước này, biến **`word`** sẽ đóng vai trò **đầu vào** để **kiểm tra hoạt động của mô hình**. Ví dụ:

```python
word = "điểm thi"
```

- Sau khi chạy, chương trình sẽ dự đoán phản hồi tương ứng dựa trên nội dung trong word:

```
Bạn đăng nhập vào cổng thông tin để tra cứu điểm cá nhân nhé.
```
