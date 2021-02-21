import bgr from "./bgr.jpg";

import "./Background.css";

const Background = () => {
    return (
        <div className="bgr">
            <img className="bgr__img" src={bgr}></img>
        </div>
    )
}

export default Background;