import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Record from "../Components/Record";
import "./records.css"

const Records = () => {
    const [records, setRecords] = useState([]);

    const onDelete = async (id) => {
        console.log(id);
        try {
            // Replace 'your-api-endpoint' with the actual API endpoint URL
            const response = await fetch(`http://localhost:3002/records/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                // Include any additional headers if required
              },
            });
        
            if (!response.ok) {
              // Handle non-2xx status codes
              console.error('Error deleting:', response.status, response.statusText);
              return;
            }
        
            const data = await response.json();
            // Handle the response or perform any necessary actions
            console.log('Delete successful:', data);
          } catch (error) {
            // Handle errors
            console.error('Error deleting:', error);
          }
      };

    useEffect(() => {
        // Fetch records from the backend API
        fetch('http://localhost:3002/records/') // Replace with your actual backend URL
          .then(response => response.json())
          .then(data => setRecords(data))
          .catch(error => console.error('Error fetching records:', error));
      }, [onDelete]);

    return(
        <>
        <Navbar />
        <div className="record-list">
            <div className="record-grid">
                {records.map(record => (
                        <div className="record-item">
                            <Record record={record} onDelete={onDelete}/>
                        </div>
                    ))}
            </div>
        </div>
        </>
    )
};

export default Records;