const express = require("express");
const router = express.Router();
const Record = require("../models/Record");
const multer = require("multer");
const Tesseract = require('tesseract.js');

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Retrieve all records
router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    console.log(records);
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving records" });
  }
});

// Create a new record
router.post('/upload', upload.single('image'), async (req, res) => {
    // Check if an image was uploaded
    if (!req.body.image) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
  
    Tesseract.recognize(
        req.body.image,
        'tha+eng', // Specify the language ('eng' for English and 'tha' for thai)
        {
          logger: info => console.log(info),
        }
      ).then(({ data: { text } }) => {
        console.log('OCR Result:', text);
      
        // Extract information using regular expressions
        const idMatch = text.match(/Identification Number (.+)/);
        const nameMatch = text.match(/Name (.+)/);
        const lastNameMatch = text.match(/Last name (.+)/);
        const dobMatch = text.match(/Date of Birth (.+)/);
        const issueDateMatch = text.match(/Date of Issue (.+)/);
        const expiryMatch = text.match(/Date of Expiry (.+)/);
    
        // Create a record based on the extracted information
        const recordData = {
            id_no: idMatch ? idMatch[1] : '',
            name: nameMatch ? nameMatch[1] : '',
            last_name: lastNameMatch ? lastNameMatch[1] : '',
            date_of_birth: dobMatch ? dobMatch[1] : '',
            date_of_issue: issueDateMatch ? issueDateMatch[1] : '',
            date_of_expiry: expiryMatch ? expiryMatch[1] : '',
            status: false,
        };

        // save to database
        try {
            const createdRecord = Record.create(recordData);
        
            res.status(201).json(createdRecord);
          } catch (error) {
            console.error('Error creating record:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
      
      }).catch(error => {
        console.error('Error during OCR:', error);
      });
});

// Delete a record by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);
    res.json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: "Error deleting record" });
  }
});

module.exports = router;
