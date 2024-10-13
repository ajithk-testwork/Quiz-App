import React from "react";

const Finish_Screen = ({ dispatch, points, maxPossiblePoints }) => {
    return(
        <div className="finish-screen">
            <p>Your Score is {points} / {maxPossiblePoints}</p>
            <button className="btn" onClick={()=> dispatch({type: "restart"})}>Restart</button>
        </div>
    )
};
export default Finish_Screen;