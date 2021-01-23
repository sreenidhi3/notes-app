import React from 'react';
import './App.css';

function  Note({eve}) {
    return(
        <div className="note">
            <h3>{eve.title}</h3>
            <div>{eve.note}</div>
        </div>
    )
}

export default Note;