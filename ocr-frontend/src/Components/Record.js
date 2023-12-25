import React, { useState } from 'react';
import "./record.css"

const Record = ({record, onDelete}) => {
  const initialData = {
    id_no: record.id_no,
    name: record.name,
    lastName: record.last_name,
    dob: record.date_of_birth,
    dateOfIssue: record.date_of_issue,
    dateOfExpiry: record.date_of_expiry,
  };

  const [data, setData] = useState(initialData);
  const [dummy, setDummy] = useState(initialData);
  const [editingField, setEditingField] = useState(false);

  const onCancel = () => {
    setDummy(data);
    setEditingField(false);
  }

  const handleSave = async () => {
    console.log("saving...");
    try {
        const response = await fetch(`http://localhost:3002/records/${record._id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dummy), // Send the modified data
        });
    
        if (!response.ok) {
          console.error('Error updating record:', response.status, response.statusText);
          return;
        }
    
        // Server Response
        const updatedRecord = await response.json();
        console.log('Record updated:', updatedRecord);
    
        setData(dummy);
        setEditingField(false);
      } catch (error) {
        console.error('Error updating record:', error);
      }
  };

  const handleChange = (fieldName, newValue) => {
    setDummy({
      ...dummy,
      [fieldName]: newValue,
    });
  };

  return (
    // Html Output for Record Card
    <div className="card">
        <div className="field">
        <span>"identification_no":</span>
        {editingField ? (
            <input type="text" value={dummy.id_no} onChange={(e) => handleChange('id_no', e.target.value)} />
        ) : (
            <span>"{data.id_no}"</span>
        )}
      </div>

      <div className="field">
        <span>"name":</span>
        {editingField ? (
          <input type="text" value={dummy.name} onChange={(e) => handleChange('name', e.target.value)} />
        ) : (
          <span>"{data.name}"</span>
        )}
      </div>

      <div className="field">
        <span>"last_name":</span>
        {editingField ? (
          <input type="text" value={dummy.lastName} onChange={(e) => handleChange('lastName', e.target.value)} />
        ) : (
          <span>"{data.lastName}"</span>
        )}
      </div>

      <div className="field">
        <span>"date_of_birth":</span>
        {editingField ? (
          <input type="text" value={dummy.dob} onChange={(e) => handleChange('dob', e.target.value)} />
        ) : (
          <span>"{data.dob}"</span>
        )}
      </div>

      <div className="field">
        <span>"date_of_issue":</span>
        {editingField ? (
          <input type="text" value={dummy.dateOfIssue} onChange={(e) => handleChange('dateOfIssue', e.target.value)} />
        ) : (
          <span>"{data.dateOfIssue}"</span>
        )}
      </div>

      <div className="field">
        <span>"date_of_expiry":</span>
        {editingField ? (
          <input type="text" value={dummy.dateOfExpiry} onChange={(e) => handleChange('dateOfExpiry', e.target.value)} />
        ) : (
          <span>"{data.dateOfExpiry}"</span>
        )}
      </div>

      {!editingField && <div>
      <button className='edit' onClick={() => setEditingField(true)}>Edit</button>
      <button className='delete' onClick={() => onDelete(record._id)}>Delete</button>
      </div>}
      {editingField && <div>
        <button className='save' onClick={() => handleSave()}>Save</button>
        <button className='cancel' onClick={() => onCancel()}>Cancel</button>
        </div>}
    </div>
  );
};

export default Record;
