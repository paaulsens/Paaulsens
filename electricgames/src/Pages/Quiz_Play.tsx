import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Components/Logo'
import Game_ById from '../Components/Games/Game_ById';
import { QuizContext } from '../Contexts/QuizContext';
import IQuizContext from '../Interfaces/IQuizContext';

import '../Css/Quiz.css';

const Quiz_Play = () => {

    const {questions} = useContext(QuizContext) as IQuizContext; // get all questions from contexts

    const [firstRender, setFirstRender] = useState(false);

      useEffect(() => {
        if(questions.length > 0){
            generateRandomNumber()
            nextQuestion()
            setFirstRender(true);
        }
    
        return () => {
          if (window.performance.navigation.type == 1) {
             window.location.href = "/quiz"
          }
    
        };
      }, [firstRender, questions]);


    const [topText, setTopText] = useState<string>("Question")
    const [questionNum, setQuestionNum] = useState<number | undefined>(1)
    const [questionText, setQuestionText] = useState<string>()
    const [questionImageId, setQuestionImageId] = useState<number | undefined>()
    const [questionOptions, setQuestionOptions] = useState<string[]>([])
    const [questionCorrect, setQuestionCorrect] = useState<string>()
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    const [blacklist, setBlacklist] = useState<number[]>([])
    const [quizIsDone, setQuizIsDone] = useState<boolean>(false)
    const [coward, setCoward] = useState<string>("coward?")
    const [stopPlayingText, setStopPlayingText] = useState<string>(`Don't want to play anymore? Feeling like a `)

    const [random, setRandom] = useState<number>(0)
 
    const generateRandomNumber = () => {
        const rand = Math.floor(Math.random() * questions.length)

        if(blacklist.includes(rand)){
            generateRandomNumber()
        }else{
            setRandom(rand)
        }
    }
    
    const nextQuestion = () => {
        
        generateRandomNumber()

        const q = questions[random]

        setQuestionImageId(q.gameId)
        setQuestionText(q.question)
        setQuestionOptions(q.options)
        setQuestionCorrect(q.correct)
        
        
        
    }

    const chooseOption = (e : any) => {

        blacklist.push(random)
        console.log(blacklist)

        if(questionsAnswered != undefined){
            setQuestionsAnswered((current) => current+1)
        }
        
        if(e.currentTarget.value === questionCorrect){
            setCorrectAnswers((current) => current+1)
        }

        if(questionsAnswered < 14){
            nextQuestion()
            setQuestionNum(questionsAnswered+2)
            
        }else{
            setQuizIsDone(true)
            setTopText("You finished the quiz.")
            setQuestionNum(undefined)
            setQuestionText("Your score:")
            setQuestionOptions(["", "", ""])
            setQuestionImageId(999)
            setStopPlayingText("")
            setCoward("Return")
        }

    }
  
  return (
    <div>
        <Logo />

        <div className="wrapper">
            <h1 className="quizInfo_h1"> {topText} {questionNum} </h1>
            <h2 className="quizQuestion_h2 text-align-center">{questionText}</h2>
            <p className="correctCounter_p text-align-center no-margin "><span style={{color: '#f2c112'}}>{correctAnswers}</span>/{questionsAnswered}</p>
            <div className="quizImage">
                <Game_ById id={questionImageId}/>
            </div>
        </div>
        
        <div className="quiz-options">
            <button style={{display: quizIsDone? 'none' : 'visible'}} className="btn small-med-btn quiz-option-btn" id="option-1" onClick={chooseOption} value={questionOptions[0]}>{questionOptions[0]}</button>
            <button style={{display: quizIsDone? 'none' : 'visible'}} className="btn small-med-btn quiz-option-btn" id="option-2" onClick={chooseOption} value={questionOptions[1]}>{questionOptions[1]}</button>
            <button style={{display: quizIsDone? 'none' : 'visible'}} className="btn small-med-btn quiz-option-btn" id="option-3" onClick={chooseOption} value={questionOptions[2]}>{questionOptions[2]}</button>     
        </div>

        <p style={{marginTop: 10, color:"rgba(255, 255, 255, 0.5)", fontSize: quizIsDone? "18px" : ""}} className="text-align-center">
            {stopPlayingText}<Link to="/quiz" className="yellowlink">{coward}</Link>
        </p>
    </div>
  );
}

export default Quiz_Play;