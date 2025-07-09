import React from 'react'
import { useState } from 'react'
import { FaTrash, FaCheckDouble} from 'react-icons/fa'
import './Message.css'

function Message({ id, text, sent, onDelete, time, seenStatus }) {
    return (
    <div className={`message-bubble ${sent ? 'sent' : 'received'}`}>
        <div className="message-content" style={{ backgroundColor: sent ? '#dcf8c6' : '#ffffff' }}>
            <p className="message-text" style={{ backgroundColor: sent ? '#dcf8c6' : '#ffffff' }}>{text}</p>
            <div className="message-footer"style={{ backgroundColor: sent ? '#dcf8c6' : '#ffffff' }}>
                <span className="message-time" style={{ backgroundColor: sent ? '#dcf8c6' : '#ffffff' }}>{time}</span>

                <FaTrash onClick={onDelete} className="delete-icon" style={{ backgroundColor: sent ? '#dcf8c6' : '#ffffff' }} />
                                {sent &&(
                    <>
                        {seenStatus === 'sent' && <FaCheckDouble className="status-icon-sent" style={{ backgroundColor: '#dcf8c6' }}/>}
                        {seenStatus === 'seen' && <FaCheckDouble className="status-icon-seen" style={{ backgroundColor: '#dcf8c6' }}/>}
                    </>
                )
                }</div>
        </div>
    </div>
    )
}

export default Message
