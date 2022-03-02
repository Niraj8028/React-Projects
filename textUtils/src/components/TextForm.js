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
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button disabled={text.length==0} type="button" className="btn btn-dark mx-2 my-1" onClick={handleClick}>Convert to toUpperCase</button>
        <button disabled={text.length==0} type="button" className="btn btn-dark mx-2 my-1" onClick={handleLowerCase}>Convert to toLowerCase</button>
        <button disabled={text.length==0} type="button" className="btn btn-dark mx-2 my-1" onClick={HandleClear}>Clear Text</button>

    </div>
    <div className="container my-3">
    <h2>Text Summary</h2>
    Text contains {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
     <div className="container" ></div>   
    <p className="my-3" style={{'backgroundColor':'rgb(188 197 192)',color:'black',height:'200px',paddingTop:'70px',paddingLeft:'20px',paddingRight:'20px'}}>{text.length>0?text:"Nothing to preview"}</p>
    </div>
   
    </> 
  )
}
