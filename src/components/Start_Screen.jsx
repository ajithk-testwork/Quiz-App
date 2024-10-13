import React from "react";

const Start_Screen = ({ dispatch, totalQuestions, maxPossiblePoints, username  }) => {
    return(
        <div className='quiz_wrapper'>
          <h3>Welcome to the {username}</h3>
          <h2>Programming Quiz</h2>
          <p>Number of Questions : {totalQuestions}</p>
          <p>Total Points : {maxPossiblePoints}</p>
          <button className='btn' onClick={()=> dispatch({type: "active"})}>
            Let's Start
            </button>
        </div>
    );
};
export default Start_Screen;