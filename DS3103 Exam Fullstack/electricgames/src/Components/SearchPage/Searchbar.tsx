import { Link } from "react-router-dom";
import { ChangeEvent} from 'react'

import '../../Css/Edit.css'

const Searchbar = ({ setInput } : {setInput : React.Dispatch<React.SetStateAction<string>>}) => {

    const handleChange = (e: ChangeEvent<(HTMLInputElement)>) => {
        setInput(e.currentTarget.value)
    }

    return (
        
        <div className="wrapper">
            <div className="searchbar">
            <form className="searchbar-form">
                <input onChange={handleChange} className="textinput" id="searchinput" type="text" placeholder="Search" />
            </form>
                <p style={{marginTop: 10, color:"rgba(255, 255, 255, 0.5)"}}>
                    Something not right? <Link to="/edit" className="yellowlink">Click here</Link> to add, edit and delete games manually.
                </p>
            </div>
        </div>
         
    );
}

export default Searchbar