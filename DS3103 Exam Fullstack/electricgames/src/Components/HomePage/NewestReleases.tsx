import Games_ByYear from '../Games/Games_ByYear';

import '../../Css/Game.css'

const NewestReleases = () => {
    return (
        <div className="newest-container">
            <Games_ByYear year={2022}/>
        </div>
    );
}

export default NewestReleases