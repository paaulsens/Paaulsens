import axios from 'axios';
import IGame from '../Interfaces/IGame';

const GameService = (

    () => {
        
        const gameEndpoint = 'http://localhost:5137/Game' 

        const getAllGames = async () => {
            const result = await axios.get(gameEndpoint)
            return result.data;
        }

        const getGamesById = async (id: number) => {
            const result = await axios.get(`${gameEndpoint}/${id}`)
            return result.data;
        }

        const getGamesByTitle = async (title: string) => {
            const result = await axios.get(`${gameEndpoint}/${title}`)
            return result.data;
        }

        const postGame = async (newGame: IGame) => {
            const result = await axios.post(gameEndpoint, newGame)
        }
        
        const deleteGame = async (id: number) => {
            const result = await axios.delete(`${gameEndpoint}/${id}`)
        }

        const putGame = async (editedGame: IGame) => {
            const result = await axios.put(gameEndpoint, editedGame)
        }

        return {getAllGames, getGamesById, getGamesByTitle, postGame, deleteGame, putGame}
    
    }
)();

export default GameService;