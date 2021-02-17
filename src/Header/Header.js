import LogoutIcon from "../Icon/LogoutIcon";
import "./Header.css";

const Header = props => {
    return (
        <header className="header">
            <h1 className="txt__header--title">{props.title}</h1>
            <div className="header__content">
                <img className="header__logo" src={props.logo} alt="Logo"></img>
                <p className="txt__header--greeting">Bonjour, {props.username}</p>
                <p className="header__date">{props.date}</p>
                <LogoutIcon />
            </div>
        </header>
    )
}

export default Header;