import React from 'react'
import { contacts } from '../Data/Contacts'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div>
            <h2>   
                Contactos
            </h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <img src={contact.photo} width="40" alt={contact.name} />
                        <span>{contact.name}</span>
                        {'-'}
                        <Link to={`/chat/${contact.id}`}>Chat</Link>
                        {'|'}
                        <Link to={`/contact/${contact.id}`}>Detalles</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomeScreen