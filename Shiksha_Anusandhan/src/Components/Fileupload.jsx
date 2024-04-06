import React, { useState } from 'react';
import './Filebutton.css'; // Import CSS file for styling

const FileUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Function to handle file upload
    const handleUpload = () => {
        // Your upload logic here
        if (selectedFile) {
            console.log("Selected file:", selectedFile);
            // Perform upload operation using selectedFile
        } else {
            console.log("No file selected.");
        }
    };

    return (
        <div className='container'>
        <div className="upload-container"> {/* Container */}
            <input type="file" onChange={handleFileChange} className="file-input" />
            <button onClick={handleUpload} className="upload-button">Upload</button>
        </div>
        </div>
    );
};

export default FileUploadButton;
