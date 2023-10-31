import { useEffect, useState, createContext, ReactNode } from 'react';
import IGameContext from '../Interfaces/IGameContext';
import IGame from '../Interfaces/IGame';
import GameService from '../Services/GameService';
import IQuizContext from '../Interfaces/IQuizContext';
import IQuiz from '../Interfaces/IQuiz';

export const QuizContext = createContext<IQuizContext | null>(null);

type Props = {
    children: ReactNode;
}

const QuizProvider = ({children} : Props) => {

    const [questions, setQuestions] = useState<IQuiz[]>([])

    useEffect(() =>{
        setQuestions([
            {
                gameId: 1,
                question: "How many Call of Duty games came before this one?",
                options: ["0", "1", "2"],
                correct: "0"
            },
            {
                gameId: 4,
                question: "Which year was this game released?",
                options: ["2007", "2008", "2009"],
                correct: "2007"
            },
            {
                gameId: 5,
                question: "Which company developed this game?",
                options: ["Treyarch", "Activision", "Infinity Ward"],
                correct: "Infinity Ward"
            },
            {
                gameId: 8,
                question: "Which company developed this game?",
                options: ["Activision", "Treyarch", "Infinity Ward"],
                correct: "Treyarch"
            },
            {
                gameId: 10,
                question: "Which year was this game released?",
                options: ["2014", "2015", "2016"],
                correct: "2015"
            },
            {
                gameId: 15,
                question: "Which year was this game released?",
                options: ["2020", "2021", "2022"],
                correct: "2022"
            },
            {
                gameId: 19,
                question: "Which year was this game released?",
                options: ["2020", "2021", "2022"],
                correct: "2021"
            },
            {
                gameId: 20,
                question: "Which company developed this game?",
                options: ["Electronic Arts", "Ubisoft", "Santa Monica Studios"],
                correct: "Electronic Arts"
            },
            {
                gameId: 21,
                question: "Which year was this game released?",
                options: ["2006", "2008", "20010"],
                correct: "2008"
            },
            {
                gameId: 22,
                question: "Which company developed this game?",
                options: ["Santa Monica Studios", "Bethesda", "Gearbox"],
                correct: "Bethesda"
            },
            {
                gameId: 23,
                question: "Which year was this game released?",
                options: ["2005", "2007", "2009"],
                correct: "2009"
            },
            {
                gameId: 24,
                question: "Which company developed this game?",
                options: ["Gearbox", "Santa Monica Studios", "Bethesda"],
                correct: "Gearbox"
            },
            {
                gameId: 25,
                question: "The Borderlands series consists of 4 games. Which game is this (chronologically)?",
                options: ["Second", "Third", "Fourth"],
                correct: "Third"
            },
            {
                gameId: 27,
                question: "Which year was this game released?",
                options: ["2016", "2018", "2020"],
                correct: "2020"
            },
            {
                gameId: 27,
                question: "Which company developed this game?",
                options: ["Mediatonic", "Santa Monica Studios", "Fizzlepop"],
                correct: "Mediatonic"
            },
            {
                gameId: 28,
                question: "What is the name of the main character in this game?",
                options: ["Giovanni", "Ezio", "Altair"],
                correct: "Altair"
            },
            {
                gameId: 29,
                question: "What is the name of the main character in this game?",
                options: ["Ezio", "Altair", "Giovanni"],
                correct: "Ezio"
            },
            {
                gameId: 33,
                question: "What is the name of the main character in this game?",
                options: ["Edward", "Damon", "Daniel"],
                correct: "Edward"
            },
            {
                gameId: 40,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "Not yet released"
            },
            {
                gameId: 41,
                question: "Which company developed this game?",
                options: ["Gearbox", "Techland", "Blizzard"],
                correct: "Blizzard"
            },
            {
                gameId: 42,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "2022"
            },
            {
                gameId: 43,
                question: "Which company developed this game?",
                options: ["Bethesda", "Gearbox", "Techland"],
                correct: "Techland"
            },
            {
                gameId: 44,
                question: "Not counting this game, how many other Dying Light titles are there?",
                options: ["2", "3", "4"],
                correct: "2"
            },
            {
                gameId: 45,
                question: "Which year was this game released?",
                options: ["2018", "2020", "2022"],
                correct: "2022"
            },
            {
                gameId: 46,
                question: "Which company developed this game?",
                options: ["Techland", "FromSoftware", "Psyonix"],
                correct: "FromSoftware"
            },
            {
                gameId: 48,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "PlayStation"
            },
            {
                gameId: 50,
                question: "Which year was this game released?",
                options: ["2018", "2020", "2022"],
                correct: "2022"
            },
            {
                gameId: 51,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "PlayStation"
            },
            {
                gameId: 52,
                question: "Which year was this game released?",
                options: ["2004", "2006", "2008"],
                correct: "2004"
            },
            {
                gameId: 56,
                question: "Which company developed this game?",
                options: ["Ubisoft", "Guerilla Games", "2K Games"],
                correct: ""
            },
            {
                gameId: 57,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "2021"
            },
            {
                gameId: 58,
                question: "Which company developed this game?",
                options: ["Santa Monica Studios", "Rockstar", "Blizzard"],
                correct: "Santa Monica Studios"
            },
            {
                gameId: 59,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "PlayStation"
            },
            {
                gameId: 62,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "2022"
            },
            {
                gameId: 63,
                question: "Which year was this game released? (NA release)",
                options: ["2000", "2002", "2004"],
                correct: "2004"
            },
            {
                gameId: 69,
                question: "Which company developed this game?",
                options: ["Rockstar", "Blizzard", "Treyarch"],
                correct: "Blizzard"
            },
            {
                gameId: 72,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "2022"
            },
            {
                gameId: 73,
                question: "Which company developed this game?",
                options: ["Rockstar", "Blizzard", "Treyarch"],
                correct: "Rockstar"
            },
            {
                gameId: 75,
                question: "Which year was this game released?",
                options: ["2013", "2016", "2019"],
                correct: "2013"
            },
            {
                gameId: 76,
                question: "Which genre does this game belong to?",
                options: ["MMO", "Adventure", "Strategy"],
                correct: "Strategy"
            },
            {
                gameId: 77,
                question: "Which company developed this game?",
                options: ["Psyonix", "Bungie Studios", "Valve"],
                correct: "Psyonix"
            },
            {
                gameId: 78,
                question: "Which year was this game released?",
                options: ["2002", "2010", "2018"],
                correct: "2018"
            },
            {
                gameId: 79,
                question: "What is the legendary name of the founder of Minecraft?",
                options: ["Notch", "Hutch", "Butch"],
                correct: "Notch"
            },
            {
                gameId: 79,
                question: "Which company developed this game?",
                options: ["Game-Freak", "Blizzard", "Mojang"],
                correct: "Mojang"
            },
            {
                gameId: 80,
                question: "Which company developed this game?",
                options: ["Valve", "2K Games", "Playground Games"],
                correct: "Valve"
            },
            {
                gameId: 81,
                question: "Which year was this game released?",
                options: ["2000", "2004", "2008"],
                correct: "2004"
            },
            {
                gameId: 82,
                question: "Which year was this game released?",
                options: ["2012", "2016", "2020"],
                correct: "2012"
            },
            {
                gameId: 83,
                question: "Which company developed this game?",
                options: ["Valve", "2K Games", "Game-Freak"],
                correct: "2K Games"
            },
            {
                gameId: 84,
                question: "How many games are in the Skate series?",
                options: ["3", "4", "5"],
                correct: "3"
            },
            {
                gameId: 86,
                question: "Which year was this game released?",
                options: ["2010", "2015", "2020"],
                correct: "2010"
            },
            {
                gameId: 87,
                question: "Which year was this game released?",
                options: ["2020", "2022", "Not yet released"],
                correct: "2022"
            },
            {
                gameId: 87,
                question: "Which company developed this game?",
                options: ["Game-Freak", "Blizzard", "Mojang"],
                correct: "2K Games"
            },
            {
                gameId: 88,
                question: "Which year was this game released?",
                options: ["2014", "2018", "2022"],
                correct: "2022"
            },
            {
                gameId: 89,
                question: "Which company developed this game?",
                options: ["Blizzard", "Valve", "Guerilla Games"],
                correct: "Guerilla Games"
            },
            {
                gameId: 90,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "PlayStation"
            },
            {
                gameId: 91,
                question: "Which company developed this game?",
                options: ["Bungie Studios", "Psyonix", "Mediatonic"],
                correct: "Bungie Studios"
            },
            {
                gameId: 92,
                question: "Which year was this game released?",
                options: ["2021", "2022", "Not yet released"],
                correct: "2021"
            },
            {
                gameId: 93,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "Xbox"
            },
            {
                gameId: 94,
                question: "This game was only released on ONE platform. Which one?",
                options: ["Windows", "PlayStation", "Xbox"],
                correct: "PlayStation"
            },
            {
                gameId: 98,
                question: " Which company developed this game?",
                options: ["Turn 10 Studios", "Rockstar", "Polyphony Digital"],
                correct: "Turn 10 Studios"
            },
            {
                gameId: 101,
                question: "Which year was this game released?",
                options: ["2019", "2021", "Not yet released"],
                correct: "Not yet released"
            },
            {
                gameId: 102,
                question: "Which company developed this game?",
                options: ["Blizzard", "Activision", "Rockstar"],
                correct: "Rockstar"
            },{
                gameId: 103,
                question: "What is the name of the main character in this game?",
                options: ["John Marsh", "John Marston", "John Marshall"],
                correct: "John Marston"
            },
        ])
    }, [])

    return (
        <QuizContext.Provider value={{questions}}> 
            {children}
        </QuizContext.Provider>
    )

}

export default QuizProvider;