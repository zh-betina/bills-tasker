import LogoutIcon from "../Icon/LogoutIcon";
import "./Header.css";

const Header = props => {
    return (
        <header className="header">
            <h1 className="txt__header--title">{props.title}</h1>
            <div className="header__content">
                <p className="txt__header--greeting">Hi, {props.username}</p>
                <p className="header__date">{props.date}</p>
                <LogoutIcon />
            </div>
        </header>
    )
}

export default Header;