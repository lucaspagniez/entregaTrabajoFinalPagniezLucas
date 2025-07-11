import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contacts } from '../Data/Contacts';
import { FaPhone, FaVideo, FaInfoCircle, FaArrowLeft } from 'react-icons/fa';
import './ContactDetail.css';

function ContactDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const contact = contacts.find(c => c.id === parseInt(id));

    return (
    <div className="contact-detail">
        <div className="contact-detail-header">
            <FaArrowLeft className="back-icon" onClick={() => navigate(-1)} />
            <h2>Info. del contacto</h2>
        </div>        
        <div className="contact-detail-info">
            <img src={contact.photo} alt={contact.name} className="contact-detail-photo" />
            <h3>{contact.name}</h3>
            <span className="contact-detail-info-phone">{contact.phone}</span>
        </div>
        <div className="contact-detail-actions">
            <div className="contact-detail-action">
                <FaPhone className="contact-icon" />
                <span className='action-text'>Llamar</span>
            </div>
            <div className="contact-detail-action">
                <FaVideo className="contact-icon" />
                <span className='action-text'>Videollamada</span>
            </div>
            <div className="contact-detail-action">
                <FaInfoCircle className="contact-icon" />
                <span className='action-text'>Ver archivos y enlaces</span>
            </div>
        </div>
    </div>
    );
}

export default ContactDetail;
