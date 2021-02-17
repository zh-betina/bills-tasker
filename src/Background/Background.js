import bgrStars from "./bgrSvgStars.svg";

import "./Background.css";

const Background = () => {
    return (
        <div className="bgr">
            <img className="bgr__stars" src={bgrStars}></img>
            <img className="bgr__stars" src={bgrStars}></img>
        </div>
    )
}

export default Background;