import React, { useState } from 'react';
import { db } from './firebaseConfig';// Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; 

const AddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber ] = useState('');
    

  const addContact = async () => {
    
    const docRef = await addDoc(collection(db, "users"),{
        name,
        number,
      })
      .then(() => {
        // contact added successfully
        console.log('Contact added ');

        // Optionally, reset form fields
        setName('');
        setNumber('');
        
      
    }) 
    .catch ((error)=> {
      console.error('Error adding contact:', error);
    });
  };

  return (

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
<h1 style={{ textAlign: 'center' }}>ADD CONTACT</h1>

<input
  type="text"
  placeholder="Enter name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{ marginBottom: '10px', textAlign: 'center', width: '300px' }}
/>
<input
  type="text" // or type="number"
  placeholder="Enter phone number"
  value={number}
  onChange={(e) => setNumber(e.target.value)}
  style={{ marginBottom: '10px', textAlign: 'center', width: '300px' }}
/>
<button style={{ padding: '10px', backgroundColor: 'black', color: 'white' }} onClick={addContact}>
  Add Contact
</button>
</div>
);
};

export default AddContact;
