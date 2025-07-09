import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { contacts } from '../Data/Contacts';
import Message from './Message';
import './ChatScreen.css';
import {FaPhone} from 'react-icons/fa';

function ChatScreen() {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));
    const [messages, setMessages] = useState(contact.messages);
    const [newMessage, setNewMessage] = useState('');
    const deleteMessage = (messageId) => {
        setMessages(messages.filter(message => message.id !== messageId));
    };
    const photoUrl = contact.photo;
    const handleSend = () => {
    if (newMessage.trim() === '') return;
    const newMsg = {
        id: Date.now(),
        text: newMessage,
        sent: true,
        time:'23:54',
        seenStatus:'sent'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
    };
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current){
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
    <div className="chat-screen">
        <div className="chat-header">
            <img src={photoUrl} alt={contact.name} className="chat-photo" />
            <span className='contact-name'>{contact.name}</span>
            <button className='call-button'><FaPhone /></button>
        </div>
        <div className="messages">
        {messages.map(message => (
            <Message
            key={message.id}{...message}
            onDelete={() => deleteMessage(message.id)}
            />
        ))
        }
        <div ref={messagesEndRef} />
        </div>

        <div className="input-zone">
        <input className="input-area"
            type="text"
            placeholder="Escribí tu mensaje..."
            value={newMessage}
            onChange={(enter) => setNewMessage(enter.target.value)}
            onKeyDown={(enter) => enter.key === 'Enter' && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>Enviar</button>
        </div>
    </div>
    );
}

export default ChatScreen;
