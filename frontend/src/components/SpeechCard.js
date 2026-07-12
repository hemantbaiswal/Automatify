import React,{useState} from "react";

function SpeechCard(){

const[text,setText]=useState("");

const recognition=new window.webkitSpeechRecognition();

recognition.continuous=false;

recognition.lang="en-US";

recognition.onresult=(event)=>{

setText(event.results[0][0].transcript);

}

return(

<div className="feature-card">

<h2>🎤 Speech Recognition</h2>

<button onClick={()=>recognition.start()}>

Start Recording

</button>

<textarea

rows="8"

value={text}

readOnly

placeholder="Speech text appears here..."

></textarea>

</div>

)

}

export default SpeechCard;