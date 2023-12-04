import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams(); // Get the contact ID from URL params
  const [contact, setContact] = useState({
    name: '',
    number: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contactDoc = await getDoc(doc(db, 'users', id));
        if (contactDoc.exists()) {
          setContact({ id: contactDoc.id, ...contactDoc.data() });
        } else {
          console.log('Contact not found');
        }
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const updateContact = async () => {
    try {
      await updateDoc(doc(db, 'users', id), { ...contact });
      console.log('Contact updated successfully');
      // Redirect to contact list or perform any necessary action after update
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <h1>EDIT CONTACT</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type='text' name='name' value={contact.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type='text' name='number' value={contact.number} onChange={handleInputChange} />
        </div>
        {/* Add other fields as needed */}
        <button type='button' onClick={updateContact}>
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
