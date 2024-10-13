import React from "react";

const Footer_Content = ({ totalQuestions, dispatch, index }) => {

    if(index <= totalQuestions - 1){
        return(
            <div>
            
            <button className="btn" onClick={()=> dispatch({type: "nextQuestions"})}>
            Next
        </button>
        </div>
        );
    }

    if(index === totalQuestions){
        return(
            <button className="btn" onClick={()=> dispatch({type: "finishScreen"})}>
            Finish
        </button>
        );
    }

   
};
export default Footer_Content