import { Link } from 'react-router-dom'

const Navbar = () => {
    const homeImg = require('../../Images/home_img.png'); 
    const quizImg = require('../../Images/quiz_img_active.png'); 
    const searchImg = require('../../Images/search_img.png'); 

    return (
        <div className="wrapper">
            <div className="navbar">
                <Link to="/"><img className="navbutton inactive" src={homeImg}></img></Link>
                <Link to="/quiz"><img className="navbutton active" src={quizImg}></img></Link>
                <Link to="/search"><img className="navbutton inactive" src={searchImg}></img></Link>
            </div>
        </div>
    );
}

export default Navbar