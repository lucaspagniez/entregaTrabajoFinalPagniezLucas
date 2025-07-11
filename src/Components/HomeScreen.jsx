import React, { useState } from 'react';
import { contacts } from '../Data/Contacts';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { FaSearch, FaWhatsapp} from 'react-icons/fa';


function HomeScreen() {
    const [searchTerm, setSearchTerm] = useState('');
const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.text.toLowerCase().includes(searchTerm.toLowerCase())
);


    return (
    <div className='homeScreen'>
        <div className='header-container'>
        <h2 className='contacts-title'><FaWhatsapp/>Whatsapp</h2>
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                type="text"
                placeholder="Buscar contacto..."
                className="search-contacts"                
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
        </div>    
            <div className='contact-container'>
                <ul>
                {filteredContacts.map(contact => {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return (
                    <Link to={`/chat/${contact.id}`} key={contact.id} className="contact-link">
                        <li className="contact-item">
                        <img src={contact.photo} alt={contact.name} className="contact-photo" />
                        <div className="contact-content">
                            <div className="contact-top">
                            <span className="contact-name-homeScreen">{contact.name}</span>
                            <span className="contact-time-homeScreen">{lastMessage?.time}</span>
                            </div>
                            <span className="contact-message-homeScreen">{lastMessage?.text}</span>
                        </div>
                        </li>
                    </Link>
                    );
                })}
                </ul>
            </div>
    </div>
    );
}

export default HomeScreen;
