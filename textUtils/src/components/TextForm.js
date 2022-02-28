import React, { useState } from "react"


export default function TextForm(props) {
    const handleClick=()=>{
    const newText=text.toUpperCase();    
    setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter text here');
    return (
      
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-dark" onClick={handleClick}>Convert to toUpperCase</button>

    </div>
  )
}
