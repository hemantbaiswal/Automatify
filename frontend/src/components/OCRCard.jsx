import { useState } from "react";
import axios from "../api";

function OCRCard() {

  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const uploadImage = async () => {

    if (!image) return;

    const formData = new FormData();

    formData.append("image", image);

    try {

      const response = await axios.post("ocr/", formData);

      setText(response.data.text);

    } catch (err) {
      alert("OCR failed");
      console.error(err);
    }
  };

  return (
    <div className="card">

      <h2>Image to Text (OCR)</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={uploadImage}>
        Extract Text
      </button>

      <textarea
        rows="10"
        value={text}
        readOnly
      />

    </div>
  );
}

export default OCRCard;