import { Link } from 'react-router-dom'
import NewestReleases from "./NewestReleases";
import ComingSoon from "./ComingSoon"

const HomeContent = () => {
    return (
        <div className="wrapper justify-content-center">
            <div className="homecontent">
                <div className="box">
                    <div className="grid-container">
                        <div className="item1">
                            Newest releases in 2022
                            <NewestReleases />
                        </div>

                        <div className="item2">
                            Coming in 2023
                            <ComingSoon />
                            </div>  

                        <div className="item3">
                            <p>The Ultimate Gaming Quiz
                            <Link to ='/quiz'><button className="btn small-btn try-quiz-btn">Try</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent