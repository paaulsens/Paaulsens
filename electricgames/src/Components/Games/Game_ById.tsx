import { useContext } from "react"
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import Game from "./Game";

const Game_ById = ({id} : {id:number|undefined}) => {

    const {games} = useContext(GameContext) as IGameContext;

    const getGameById = (id: number|undefined) => {
        const filteredGames = games.filter(game => game.id === id);
        return filteredGames.map((game, i) => (
            <Game 
            key={`game-${i}`} 
            id={game.id} 
            title={game.title} 
            developer={game.developer} 
            platform={game.platform} 
            releaseYear={game.releaseYear} 
            image={game.image}
            />
        ))
    }

    return(
        <>
            {getGameById(id)}
        </>
    )

}

export default Game_ById;