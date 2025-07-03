import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { contacts } from '../Data/Contacts'
import Message from './message'
import './ChatScreen.css'

function ChatScreen() {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));
    const [messages, setMessages] = useState(contact.messages);

    const deleteMessage = (Id) => {
        setMessages(messages.filter(message => message.id !== Id));        
    };

return (
    <div>
        <h2>Chat con {contact.name}</h2>
        {messages.map(message => (
            <Message 
                key={message.id} {...message} onDelete={()=> deleteMessage(message.id)}
            />
        ))}
    </div>);
}
export default ChatScreen