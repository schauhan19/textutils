import  React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked:"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }
const handleLoClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase","success")
}
  
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
    
  }

  const handleClear =() =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success")
  }

  const handleCopy =() =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success")
  }
  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/) ;
    setText(newText.join(" "))
    props.showAlert("Extraspaces removed","success")
  }

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#212a3a'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'dark':'dark'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> convert to UpperCase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}> convert to LowerCase </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}> Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

      </div>
      <div className="container my-3 " style={{color:props.mode === 'dark'?'white':'#212a3a'}}>
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
