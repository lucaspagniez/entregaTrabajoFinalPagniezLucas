import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ChatScreen from './Components/ChatScreen';
import Contactetail from './Components/ContactDetail';
import ContactDetail from './Components/ContactDetail';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path= "/chat/:id" element={<ChatScreen />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>
    </Router>
  )
}

export default App
