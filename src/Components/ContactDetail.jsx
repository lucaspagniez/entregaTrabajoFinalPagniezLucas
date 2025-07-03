import React from 'react'
import { useParams } from 'react-router-dom'
import { contacts } from '../Data/Contacts'

function ContactDetail() {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));

    return (
        <div>
            <h2>detalles de {contact.name}</h2>
            <img src={contact.photo} width="200" alt={contact.name} />
            <p> Nombre: {contact.name}</p>
            
        </div>
    );
}
export default ContactDetail;