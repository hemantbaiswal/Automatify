# 🤖 Automatify

Automatify is an AI-powered web application that automates everyday tasks such as:

- 📷 Text Extraction from Images (OCR)
- 🎤 Speech Recognition
- 🌐 Language Translation

The application is built using **React.js** for the frontend and **Django (Python)** for the backend.

---

## 📌 Features

### 📝 OCR (Optical Character Recognition)

- Upload image files
- Extract text using Tesseract OCR
- Display extracted text instantly

### 🎤 Speech Recognition

- Convert speech/audio into text
- Easy-to-use interface
- Fast processing

### 🌍 Language Translation

- Translate text into multiple languages
- Simple and responsive UI
- Instant translation results

### 🎨 Modern User Interface

- Dark blue responsive design
- Hero section
- Feature cards
- Navigation bar
- Footer
- Mobile-friendly layout

---

# 🛠 Technologies Used

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Axios
- React Router DOM

## Backend

- Python
- Django
- Django REST Framework

## AI Libraries

- pytesseract
- Pillow
- SpeechRecognition
- googletrans (or deep-translator)

---

# 📂 Project Structure

```
Automatify/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── automation/
│   ├── automatify/
│   ├── manage.py
│   ├── requirements.txt
│   └── ...
│
├── README.md
└── .gitignore
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Automatify.git

cd Automatify
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Start Django server

```bash
python manage.py runserver
```

Backend runs on

```
http://127.0.0.1:8000
```

---

# Required Python Packages

```bash
pip install django
pip install djangorestframework
pip install pillow
pip install pytesseract
pip install SpeechRecognition
pip install deep-translator
pip install django-cors-headers
```

---

# OCR Setup

Install **Tesseract OCR**

Windows Download:

https://github.com/UB-Mannheim/tesseract/wiki

Example installation path:

```
C:\Program Files\Tesseract-OCR\tesseract.exe
```

Configure in Python

```python
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
```

---

# API Endpoints

## OCR

```
POST /api/ocr/
```

---

## Speech Recognition

```
POST /api/speech/
```

---

## Translation

```
POST /api/translate/
```

---

# Screenshots

## Home Page

- Dark Blue Navigation
- Hero Section
- OCR Card
- Speech Card
- Translation Card
- Footer

(Add screenshots here after deployment.)

---

# Future Improvements

- User Login & Registration
- OCR History
- Download Extracted Text
- PDF OCR
- Voice Translation
- AI Chatbot Integration
- Dark/Light Theme
- Cloud Deployment

---

# Deployment

## Frontend

- Vercel
- Netlify

## Backend

- Render
- Railway
- PythonAnywhere

---

# Author

**Your Name**

Bachelor of Computer Applications (BCA)

---

# License

This project is developed for educational and learning purposes.
