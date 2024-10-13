import { useEffect, useReducer, useState } from 'react'
import { quizQuestions } from '../questions';
import Start_Screen from './components/Start_Screen';
import Quiz_Start from './components/Quiz_Start';
import Finish_Screen from './components/Finish_Screen';
import LoginForm from './components/Login/LoginForm';
import Navbar from './components/Navbar/Navbar';


const reducer = (state, action) => {
  switch(action.type){
    case "data-received" : 
      return {...state, questions: action.payload, status: "ready"};
    case "login" :
      return{...state, status:"login"};
    case "active": 
      return {...state, status: "active"};
    case "newAnswer" :
      
      const question = state.questions.at(state.index);

      return {...state, answer: action.payload, points: action.payload === question.correctAnswer ?
        state.points + question.points : state.points,
      };

    case "nextQuestions":
      return {...state, index: state.index + 1, answer: null}
    case "finishScreen":
      return {...state, status: "finish"} 
    case "restart":
      return {...state, status: "ready", index: 0, answer: null}    

    case "skipQuestion":
        return { ...state, index: state.index + 1, answer: null };
    case "prevQuestion":
        return { ...state, index: state.index - 1, answer: null }; // Reset answer if going back
    case "nextQuestion":
        return { ...state, index: state.index + 1 };
    case "finishQuiz":
        return { ...state, isFinished: true };
    default:
        return state;
  }
}

const initialstates = {
  questions : [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
}

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [loginComplete, setLoginComplete] = useState(false);
  const [username, setUsername] = useState('');
  const [{status, questions, index, answer, points}, dispatch] = useReducer(reducer, initialstates);

  useEffect(function(){
    if(quizQuestions) {
      dispatch({type: "data-received", payload: quizQuestions });
    }
  },[]);


  const totalQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur)=> prev+cur.points,0);

  useEffect(() => {
    if (loginComplete) {
      const timer = setTimeout(() => {
        setShowLogin(false); 
      }, 1000); 
      return () => clearTimeout(timer); 
    }
  }, [loginComplete]);

  const handleLogin = (username) => {
    setUsername(username)
    setLoginComplete(true); 
  };

return (
  <div className='app_container'>
    <Navbar username={username}/>
    <main className='container'>

  {showLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          {status === "ready" && <Start_Screen dispatch={dispatch} 
            totalQuestions={totalQuestions}
            maxPossiblePoints={maxPossiblePoints} />}
  
          {status === "active" && <Quiz_Start 
            questions={questions[index]}
            dispatch={dispatch} 
            totalQuestions={totalQuestions}
            index={index + 1}
            answer={answer} />}
  
          {status === "finish" && <Finish_Screen dispatch={dispatch}
            points={points} username={username}
            maxPossiblePoints={maxPossiblePoints} />}
        </>
      )}
    </main>
    </div>
  )
}

export default App
