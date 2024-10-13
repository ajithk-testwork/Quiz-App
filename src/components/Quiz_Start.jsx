import React from "react";
import Footer_Content from "./Footer_Content";

const Quiz_Start = ({ dispatch, questions, totalQuestions, index, answer }) => {

    console.log(questions);

    const hasAnswer = answer !== null;

    const handleOptionClick = (optionIndex) => {
        dispatch({ type: "newAnswer", payload: optionIndex });
    };

    const handleSkip = () => {
        dispatch({ type: "skipQuestion" });
    };

    

    return(
        <div className="quiz">
            <div className="quiz-header">
                <h2>{questions.question}</h2>
            </div>
            <div className="quiz-body">
                {questions.options.map((option, optionIndex) =>(
                    <li
                    key={option}
                    onClick={() => handleOptionClick(optionIndex)}
                    className={`${hasAnswer ? optionIndex === questions.correctAnswer ? "correct" : "wrong" : ""}`}
                >
                    {option}
                    </li>
                ))}
            </div>
            <div className="quiz-footer">
                <p>Number of Questions : {index} / {totalQuestions}</p>
                <button className="btn" onClick={handleSkip}>Skip Question</button>
                <Footer_Content
                dispatch={dispatch}
                index={index}
                totalQuestions={totalQuestions}/>
            </div>
        </div>
    );
};
export default Quiz_Start; 