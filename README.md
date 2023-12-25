# Thai-id-ocr

# Project Overview:
This project aims to develop an efficient and reliable Optical Character Recognition (OCR) solution for extracting information from Thai National ID cards. The system will utilize Tesseract.js Open Source Library for OCR processing, React.js for the user interface, Express.js for server-side logic, Node.js as the runtime environment, and MongoDB as the database for storing and managing extracted data.

# Key Features
1. OCR Image Processing:
- Integrate Tesseract.js to perform OCR on Thai National ID card images.
- Extract relevant information such as name, last name, ID number, address, and date of birth, date of issue and date of expiry.
2. Display all pre-processed results using REST Api Endpoints
3. Modifying existing data
4. Deleting existing data

# Technologies Used
1. React.js
2. Express.js
3. Node.js
4. Tesseract.js
5. MongoDB

# Screenshots of Project
![Screenshot from 2023-12-25 22-37-10](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/519a712b-3553-49bc-b8f5-9fcf941f9f9f)
![Screenshot from 2023-12-25 22-26-13](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/52e669b5-dc04-402e-a567-307109a546d9)
![Screenshot from 2023-12-25 22-35-11](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/b1dc0f80-9f25-4eab-83f1-79cf645c7d10)
![Screenshot from 2023-12![Screenshot from 2023-12-25 22-40-32](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/fa7cdcdc-6e44-4e30-91bf-1be23f8e492e)
-25 22-29-17](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/98aeceb5-fb8b-4270-b8d4-c9d8378ea1ce)
![Screenshot from 2023-12-25 22-40-32](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/71e306b1-e369-47a8-8a4e-b160f5295862)
![Screenshot from 2023-12-25 22-40-43](https://github.com/theabhaymalvi/Thai-id-ocr/assets/75466244/b217bf4d-c047-4d3f-8cec-78e47753b660)

# Improvements
- This application doesn't work on blur and unclear images or images with too much contrast or exposure.
- Which can be improved using training model on such thai labelled national id cards.
- And Accuracy and robustness can also improve by having more language training data with more related words from ID.
