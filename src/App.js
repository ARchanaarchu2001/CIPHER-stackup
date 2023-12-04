import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import EditContact from './Components/EditContact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AddContact" element={<AddContact />} />
        <Route path="/ContactList" element={<ContactList />} />
        <Route path="/EditContact/:id" element={<EditContact />} />
        <Route path="/Login" element={<Login />} />
        {/* Other parts of your application */}
      </Routes>
    </Router>
  );
};

export default App;
