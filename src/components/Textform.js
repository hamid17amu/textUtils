import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        // bsetText("You have clicked on handleUpClick");
        let newText=aText.toUpperCase();
        bsetText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        bsetText(event.target.value);
    }
    const [aText, bsetText] = useState('');
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="container" >

        <h1>{props.heading}</h1> 
<div className="mb-3">
{/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
<textarea className="form-control" value={aText} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3c3b3b':'white', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{aText.split(" ").length} words and {aText.length} characters</p>
      </div>
    </div>
  )
}
