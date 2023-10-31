import { useContext } from "react"
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import Game from "./Game";

const Games_All = () => {

    const {games} = useContext(GameContext) as IGameContext;

    const getAllGames = () => {

            return games.map((game, i) => (
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
            {getAllGames()}
        </>
    )

}

export default Games_All;