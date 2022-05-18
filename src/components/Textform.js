import React, { useState } from 'react'

export default function Textform(props ) {
  const handleUPClick = ()=>{
    console.log("uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText)
  }
   const handleLoClick = ()=>{
    // console.log("uppercase was clicked" + text );
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  const handleOnchange = (Event)=>{
    setText(Event.target.value);
  }
  const speak =()=> {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const handleNumExtract = () => {
    const regex = /[0-9]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res)
  };
  const [text, setText] = useState('');
  // setText("new text");
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-1" onClick={handClearClick}>Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={handleNumExtract}>Extract number </button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/480px-Speaker_Icon.svg.png" alt="Speak"width={20}/></button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split("").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
  