import { useState, ChangeEvent} from 'react'
import IGame from '../../Interfaces/IGame'
import GameService from '../../Services/GameService'

import '../../Css/Edit.css'

const EditGame = () => {

    const [id, setId] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [developer, setDeveloper] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<string>("")
    const [image, setImage] = useState<string>("")
    
    const [editStatus, setEditStatus] = useState<string>("")

    const getGameFromService = async () => {
        const game = await GameService.getGamesById(parseInt(id))
        setTitle(game.title)
        setDeveloper(game.developer)
        setPlatform(game.platform)
        setReleaseYear(game.releaseYear)
        setImage(game.image)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;

        switch( name ){
            case "id":
                setId(value)
                break

            case "title":
                setTitle(value)
                break

            case "developer":
                setDeveloper(value)
                break

            case "platform":
                setPlatform(value)
                break

            case "releaseYear":
                setReleaseYear(value)
                break
            
            case "image":
                setImage(value)
                break
        }
    }

    const editGame = () => {
        const editedGame : IGame = {
            id: parseInt(id),
            title: title,
            developer: developer,
            platform: platform,
            releaseYear: parseInt(releaseYear),
            image: image
        }
        if(editedGame.id !== null){
            GameService.putGame(editedGame)
            setEditStatus("Game was edited successfully.")
            console.log(editedGame)
        } else{
            setEditStatus("Game was NOT edited.")
        }
    }

    const addGame = () => {

        const newGame : IGame = {
            title: title,
            developer: developer,
            platform: platform,
            releaseYear: parseInt(releaseYear),
            image: image
        }

            if(newGame.title.length > 0 
                && newGame.developer.length > 0 
                && newGame.platform.length > 0 
                && newGame.releaseYear > 0 
                && newGame.image.length > 0){
            
                GameService.postGame(newGame)
                setEditStatus("New record was added successfully.")
            } else{
                setEditStatus("Please fill in all fields first.")
            }
        
    }

    return(
        <fieldset className="edit-section">

            <div className="grid-twelve">
                <p>Enter the ' Id ' of the game you wish to edit</p>
                <input className="edit-input" name="id" onChange={changeHandler} type="text" value={id}></input>
                <button className="btn extra-small-btn edit-input get-game-btn" onClick={getGameFromService}>Get game</button>
            </div>

            <div className="grid-four">
                <p>Title</p>
                <input className="edit-input" name="title" onChange={changeHandler} type="text" value={title}></input>
            </div>

            <div className="grid-four">
                <p>Developer</p>
                <input className="edit-input" name="developer" onChange={changeHandler} type="text" value={developer}></input>
                
            </div>

            <div className="grid-four">
                <p>Platform</p>
                <input className="edit-input" name="platform" onChange={changeHandler} type="text" value={platform}></input>
               
            </div>

            <div className="grid-four">
                <p>Release Year</p>
                <input className="edit-input" name="releaseYear" onChange={changeHandler} type="text" value={releaseYear}></input>
               
            </div>

            <div className="grid-four">
                <p>Image</p>
                <input className="edit-input" name="image" onChange={changeHandler} type="text" value={image}></input>
            </div>

            <div className="grid-four">
                <p className="yellowtext">Click to confirm</p>
                <input type="button" className="btn edit-btn edit-input " value="Edit" onClick={editGame}></input>
                <input type="button" className="btn add-btn edit-input" value="Add new" onClick={addGame}></input>
                <p>{editStatus}</p>
            </div>
            
        </fieldset>
    )
}

export default EditGame;