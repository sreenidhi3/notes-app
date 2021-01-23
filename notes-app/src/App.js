//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import  Note from './note.js';
import './App.css';

function App() {



  const [ inputTitle ,setNoteTitle ] = useState("");
  const [ inputNote ,setNoteData ] = useState("");
  const [ notes ,setNotes] = useState([]);
  

  const titleHandler=(e)=>{
    setNoteTitle(e.target.value);
    console.log(inputTitle);
  }

  const dataHandler=(e)=>{
    setNoteData(e.target.value);
    console.log(inputNote);
  }

  const addnote = (e)=>{
    e.preventDefault();
    setNotes([...notes, {
      title: inputTitle,
      note: inputNote,
      id:  Math.random() * 3000
    }])
    setNoteData("");
    setNoteTitle("");
  }

  
  localStorage.setItem('prev', notes);
  var prev = localStorage.getItem('prev');
 
  //prev.map((p)=>setNotes(p));
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="header">Let's Take Notes</div>
        <div className="input-note">
          <div className="inputs">
            <input 
            value={inputTitle} 
            onChange={titleHandler}
            className="note-title" 
            placeholder="Title: ">
            </input><hr/>
            <textarea 
            value={inputNote} 
            onChange={dataHandler}
            className="note-data" 
            placeholder="Notes.. ">
            </textarea>
          </div>
            <button onClick={addnote} className="submit">Add Note</button>
        </div>
        <div className="display-notes">
            {
            notes.map((eve)=>
              <Note eve = {eve} />
              )}
        </div>
      </div>
    </div>
  );
  
 
 
 
}


export default App;
