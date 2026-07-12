import React, { useState } from "react";
import api from "../services/api";

function OCRCard() {

    const [image,setImage]=useState(null);
    const [text,setText]=useState("");

    const uploadImage=async()=>{

        if(!image){
            alert("Please choose an image.");
            return;
        }

        const formData=new FormData();

        formData.append("image",image);

        try{

            const res=await api.post("ocr/",formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            });

            setText(res.data.text);

        }

        catch(error){

            alert("OCR Failed");

        }

    }

    return(

<div className="feature-card">

<h2>📤 Text Extraction</h2>

<input
type="file"
accept="image/*"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button onClick={uploadImage}>
Extract Text
</button>

<textarea
rows="8"
value={text}
readOnly
placeholder="Extracted text appears here..."
></textarea>

</div>

    )

}

export default OCRCard;