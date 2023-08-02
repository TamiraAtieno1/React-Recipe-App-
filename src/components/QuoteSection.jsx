import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const QuoteSection=()=>{
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/> Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together.</p>
            <p className="quote-author">~ Guy Fieri</p>
        </div>
    )
}
export default QuoteSection;