import { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import "./home.css"

const Home = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [extractionResults, setExtractionResults] = useState(false);
    const fileInputRef = useRef(null);

    const handleUpload = () => {
        fileInputRef.current.click();
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedImage(URL.createObjectURL(file));
      };

    const handleDetect = async() => {
        setExtractionResults(true);
        try {
            const formData = new FormData();
            formData.append('image', uploadedImage);
      
            const response = await fetch('http://localhost:3002/records/upload', {
              method: 'POST',
              body: formData,
            });
      
            if (!response.ok) {
              const data = await response.json();
              console.error('Error uploading image:', data.error);
              return;
            }
      
            const data = await response.json();
            console.log('Upload successful:', data);
            setExtractionResults(data);
      
            // Handle the response
          } catch (error) {
            console.error('Error uploading image:', error);
          }
    };

    return(
        <>
        <Navbar/>
        <div className="id-card-ocr-container">
        <div className="upload-section">
            <div className="container-title">
                <h3> Upload Image for OCR </h3>
            </div>
            <div className="image-preview">
            {uploadedImage && <img src={uploadedImage} alt="Uploaded ID" />}
            </div>
            <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            />
            <div className="buttons">
            <button className="upload-button"  onClick={handleUpload}>Upload</button>
            <button className="detect-button" onClick={handleDetect}>Detect</button>
            </div>
        </div>
        <div className="results-section">
        <div className="container-title">
            <h3> Extracted Results </h3>
        </div>
            <div className="results">
            {extractionResults && (
            <ul>
                {Object.entries(extractionResults).map(([field, value]) => (
                <li key={field}>
                    <strong>{field}:</strong> {value}
                </li>
                ))}
                {extractionResults.status && <li><strong className="success">Successful</strong></li>}
                {extractionResults.status && <li><strong className="fail">Failed</strong></li>}
            </ul>
            )}
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;