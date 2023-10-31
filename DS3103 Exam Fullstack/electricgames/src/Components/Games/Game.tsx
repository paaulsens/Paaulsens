import IGame from "../../Interfaces/IGame";

const Game = ({id, image}: IGame) => {

    const openInApi = () => {
        window.open(`http://localhost:5137/game/${id}`)
    }

    return (
        <div>
            <div className="game-box" style={{
                height: 200,
                width: 160,
                borderRadius: 10,
                backgroundImage: `url(http://localhost:5137/images/games/${image})`,
                backgroundSize: 'cover',
                margin: 20
            }} onClick={openInApi}/>
        </div>
    )};

export default Game;