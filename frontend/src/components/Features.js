import OCRCard from "./OCRCard";
import SpeechCard from "./SpeechCard";
import TranslationCard from "./TranslationCard";
import "./Features.css";

function Features(){

return(

<section className="features">

<h1>Our AI Services</h1>

<div className="feature-container">

<OCRCard/>

<SpeechCard/>

<TranslationCard/>

</div>

</section>

)

}

export default Features;