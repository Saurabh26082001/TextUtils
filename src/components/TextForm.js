import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
      // console.log("upperCase was clicked and value of text is =>"  + text)
      setText(text.toUpperCase());
      props.alert("Converted to Upper Case", "Success");
  }
  const handleDownClick =()=>{
    setText(text.toLowerCase());
    props.alert("Converted to Lower Case", "Success");
  }
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('this is initial value of text');
  // text = "new text" // this is wrong way to change the state
  // setText("new text after changing the state"); // this is correct way to change the state
  return (
    <>
    <div className={`container text-${props.mode ==='dark' ? 'light' : 'dark'}`}>
        <h1>{props.heading}</h1>
        {/* <label for="myBox" className="form-label">Enter your String</label> */}
        <div className="mb-3">
          <textarea name="form-control" style= {{backgroundColor: props.mode==='light' ? 'white' : '#234f', color: props.mode==='light' ? 'black' : 'white' }} id="myBox" value={text} onChange={handleOnChange} cols="150" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary " onClick={handleUpClick} >To upperCase </button>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleDownClick} >To LowerCase </button>
    </div>

    <div className={`container my-3 text-${props.mode==='dark' ? 'light' : 'dark'}`}>
      {/* mx-number    or my-number   "mx-2" and "my-1" is a bootstrap class which give margin in x and y respectively */}
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
