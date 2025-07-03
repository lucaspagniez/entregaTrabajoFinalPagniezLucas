import React from 'react'
import { FaTrash } from 'react-icons/fa'

function Message({ id,text, sent, onDelete }){
    return (
        <div style={{
            textAlign: sent ? 'right' : 'left',
            background: sent ? '#dcf8c6' : '#f8f8f8',
            margin: '10px',
            padding: '10px',
            borderRadius: '8px',
            position: 'relative',
        }}>
            {text}
            <FaTrash onClick={onDelete} style={{
                marginLeft: '10px',
                cursor: 'pointer',
                fontSize: '14px',}}/>
        </div>
    );
}
export default Message;