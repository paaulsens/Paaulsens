import {ChangeEvent, useContext, useState } from 'react';
import IGameContext from '../../Interfaces/IGameContext';
import { GameContext } from '../../Contexts/GameContext';

const DeleteGame = () => {

    const [id, setId] = useState<number>(0)
    const {games, deleteGameById} = useContext(GameContext) as IGameContext

    const [deleteStatus, setDeleteStatus] = useState<string>("")

    const handleChange = (e: ChangeEvent<(HTMLInputElement)>) => {
        setId(parseInt(e.currentTarget.value))
    }

    const deleteGame = () => {

        if(id > 0){
            deleteGameById(id)

            const found = games.find(game => game.id === id);
    
            if(found){
                setDeleteStatus("Game was deleted successfully.")
            } else{
                setDeleteStatus("Game was NOT deleted")
            }
        } else{
            setDeleteStatus("Please set id first")
        }
        
        
    }

    return (
        <fieldset className="center">
            <div>
                <p>Enter the ' Id ' of the game you wish to delete</p>
                <input className="edit-input" type="number" onChange={handleChange} placeholder="0"/>
            </div>
            
            <div className="margin-top">
                <p className="yellowtext delete-confirm">Click to confirm</p>
                <input type="button" className="btn edit-input delete-btn" value="Delete" onClick={deleteGame}></input>
                <p> Amount of records in database: {games.length} </p>
                <p>{deleteStatus}</p>
            </div>
        </fieldset>
    )
}

export default DeleteGame;