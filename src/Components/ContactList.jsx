
import React, { useState, useEffect } from 'react'; 
import { db } from './firebaseConfig'; // Import Firestore instance
import { collection, getDocs ,deleteDoc,doc} from 'firebase/firestore';
import { Link } from 'react-router-dom';
const ContactList = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const contactDataCollection = collection(db, 'users'); // Assuming 'users' is your collection name
        const querySnapshot = await getDocs(contactDataCollection);
        const contactData = [];
        querySnapshot.forEach((doc) => {
          contactData.push({ id: doc.id, ...doc.data() });
        });
        setContactData(contactData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContactData();
  }, []);
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id)); // Assuming 'users' is your collection name
      setContactData(contactData.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
<div className='container'
style={{ textAlign:'center' }}>
      
      <h1><center>CONTACTS</center></h1>
      <ul>
        {contactData.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.name}</h3>
            <p>NUMBER: {contact.number}</p>
            <Link to={`/EditContact/${contact.id}`}>Edit</Link>
            <br />
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            
          </li>
        ))}
      </ul>
      
      <button>
       <center> <Link to={"/AddContact"}>CREATE NEW CONTACT</Link></center>
        </button>
    </div> 
  );
};
export default ContactList 

/*<div
className='container'
style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
}}
>
<h1>CONTACTS</h1>
<ul>
  {contactData.map((contact) => (
    <li key={contact.id}>
      <h3>{contact.name}</h3>
      <p>NUMBER: {contact.number}</p>
      <Link to={`/EditContact/${contact.id}`}>Edit</Link>
      <br />
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  ))}
</ul>

<button>
  <Link to={"/AddContact"}>CREATE NEW CONTACT</Link>
</button>
</div>
);
};

export default ContactList;*/
