import { useContext } from "react"
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import Game from "./Game";

const Games_ByTitle = ({input, sortBy} : {input:any, sortBy: string}) => {

    const {games} = useContext(GameContext) as IGameContext;

    const getGamesByTitle = (title: string, sortBy: string) => {
        const filteredGames = games.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));


        /* Sorting results */

        if(sortBy === "id-asc"){ // chronologically - ascending
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

        else if(sortBy === "id-desc"){ // chronologically - descending
            return filteredGames.reverse().map((game, i) => (
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
        
        else if(sortBy === "title-asc"){ // title alphabetically - ascending
            return filteredGames.sort( (a, b) => {
             if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
             if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
             return 0;
            }).map((game, i) => (
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

        else if(sortBy === "title-desc"){ // title alphabetically - ascending
            return filteredGames.sort( (a, b) => {
             if(b.title.toLowerCase() < a.title.toLowerCase()) return -1;
             if(b.title.toLowerCase() > a.title.toLowerCase()) return 1;
             return 0;
            }).map((game, i) => (
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
        
        else if(sortBy === "dev-asc"){ // developer alphabetically - ascending
            return filteredGames.sort( (a, b) => {
                if(a.developer.toLowerCase() < b.developer.toLowerCase()) return -1;
                if(a.developer.toLowerCase() > b.developer.toLowerCase()) return 1;
             return 0;
            }).map((game, i) => (
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

        else if(sortBy === "dev-desc"){ // developer alphabetically - descending
            return filteredGames.sort( (a, b) => {
                if(b.developer.toLowerCase() < a.developer.toLowerCase()) return -1;
                if(b.developer.toLowerCase() > a.developer.toLowerCase()) return 1;
             return 0;
            }).map((game, i) => ( // checks every single object and calls it "game" and for every "game" do this below
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

        else if(sortBy === "year-asc"){ //  release year chronologically - ascending
            return filteredGames.sort( (a, b) => {
             if(a.releaseYear < b.releaseYear) return -1;
             if(a.releaseYear > b.releaseYear) return 1;
             return 0;
            }).map((game, i) => ( // checks every single object and calls it "game" and for every "game" do this below
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

        else if(sortBy === "year-desc"){ // release year chronologically - descending
            return filteredGames.sort( (a, b) => {
             if(b.releaseYear < a.releaseYear) return -1;
             if(b.releaseYear > a.releaseYear) return 1;
             return 0;
            }).map((game, i) => ( // checks every single object and calls it "game" and for every "game" do this below
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
    }

    return(
        <>
            {getGamesByTitle(input.toLowerCase(), sortBy)}
        </>
    )

}

export default Games_ByTitle;