import { Link } from "react-router-dom";

import "./BtnMain.css";

const BtnMain = props => {
    const info = props.info;
    return (
        <Link to={props.href}>
            <button className="btn__main">
            {props.children} <p className="txt__btn--main">{props.txt}</p>
                {
                    info ? <span className="btn__number-info">{props.number}</span> : null
                }
            </button>
        </Link>
    )
}

export default BtnMain;