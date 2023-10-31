import Games_ByYear from '../Games/Games_ByYear';

import '../../Css/Game.css'

const ComingSoon = () => {
    
    return (
        <div className="coming-container">
            <Games_ByYear year={2023}/>
        </div>
    );
}

export default ComingSoon