import { Link } from 'react-router-dom'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar/Navbar_Quiz';

import '../Css/Quiz.css';

const Quiz = () => {
  
  return (
    <div>
        <Logo />
        <Navbar />

        <div className="wrapper">
            <h1 className="quizInfo_h1"> The ultimate gaming quiz </h1>
        </div>

        <div className="wrapper">
            <div className="quizInfo text-align-center">
                <div>
                    <p className="quizInfo_p"> 
                        Are you a true gamer? Test your knowledge with our official gaming quiz. 
                        Put your money where your mouth is with this multiple choice quiz consisting of 15 questions. 
                        <br/><br/>
                        For each question you will be presented with a question text and three choices. 
                        There is only one correct choice for each question.
                        <br/><br/>
                        Good luck, gamer!
                    </p>
                </div>
                
                <div className="wrapper">
                    <div className="fill-row">
                        <Link to="/quiz/play"><button className="btn medium-btn enter-quiz-btn">I'm not a coward!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Quiz;