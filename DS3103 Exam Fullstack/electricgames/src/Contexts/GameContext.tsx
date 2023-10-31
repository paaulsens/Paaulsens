import { useEffect, useState, createContext, ReactNode } from 'react';
import IGameContext from '../Interfaces/IGameContext';
import IGame from '../Interfaces/IGame';
import GameService from '../Services/GameService';

export const GameContext = createContext<IGameContext | null>(null);

type Props = {
    children: ReactNode;
}

const GameProvider = ({children} : Props) => {

    useEffect(() =>{
        getGamesFromService();
    }, [])

    const [games, setGames] = useState<IGame[]>([])

    const getGamesFromService = async () => {
        const gamesFromService = await GameService.getAllGames();
        setGames(gamesFromService);
    }

    const deleteGameById = async (id: number) => {
        await GameService.deleteGame(id)
        const filteredGames = games.filter( game => game.id != id)
        setGames(filteredGames)
    }

    return (
        <GameContext.Provider value={{games, deleteGameById}}> 
            {children}
        </GameContext.Provider>
    )

}

export default GameProvider;