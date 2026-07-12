import React,{useState} from "react";

import api from "../services/api";

function TranslationCard(){

const[text,setText]=useState("");

const[translated,setTranslated]=useState("");

const translate=async()=>{

try{

const res=await api.post("translate/",{

text:text

});

setTranslated(res.data.translation);

}

catch{

alert("Translation Failed");

}

}

return(

<div className="feature-card">

<h2>🌍 Translation</h2>

<textarea

rows="6"

placeholder="Enter text..."

onChange={(e)=>setText(e.target.value)}

></textarea>

<button onClick={translate}>

Translate

</button>

<textarea

rows="6"

readOnly

value={translated}

placeholder="Translated text"

></textarea>

</div>

)

}

export default TranslationCard;