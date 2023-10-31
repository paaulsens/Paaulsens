import { useContext } from "react"
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import Game from "./Game";

const Games_ByYear = ({year} : {year: number}) => {

    const {games} = useContext(GameContext) as IGameContext;

    const getGamesByYear = (year: number) => {
        const filteredGames = games.filter(game => game.releaseYear === year);

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
            {getGamesByYear(year)}
        </>
    )

}

export default Games_ByYear;