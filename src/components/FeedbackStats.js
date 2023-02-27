import React,{useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  
  const{feedback, isLoading}= useContext(FeedbackContext)
    // calculate ratings avg
    let average =
      feedback.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedback.length;
    return (
      <div className='feedback-stats'>
        <h4>{feedback.length} reviews</h4>
        <h4>Total Average </h4>
        <h4>average rating: {isNaN(average) ? 0 : average}</h4>
      </div>
    );
  }
  
  export default FeedbackStats;