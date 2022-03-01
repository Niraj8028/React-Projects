import React, { useState } from "react"


export default function TextForm(props) {
    const handleClick=()=>{
    const newText=text.toUpperCase();    
    setText(newText)
    props.showAlert("Converted to Upper case !","success");
    }
    const handleOnChange=(event)=>{
        console.log("OnChange")
        setText(event.target.value)
        
    }
    const handleLowerCase=()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lower case !","success");
    }
    const HandleClear=()=>{
        setText("")
        props.showAlert("Cleared !","success");
    }
    const [text,setText]=useState('');
    return (
     <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <h1>Text Converter</h1>
            <label for="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-dark mx-2" onClick={handleClick}>Convert to toUpperCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={handleLowerCase}>Convert to toLowerCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={HandleClear}>Clear Text</button>

    </div>
    <div className="container my-3">
    <h2>Text Summary</h2>
    Text contains {text.split(" ").length-1} words and {text.length} characters.

    <p className="my-3">{text}</p>
    </div>
   
    </> 
  )
}
