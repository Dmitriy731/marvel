import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {

    return (
        <header className="app__header">
            <h1 className="app__title">
                <NavLink
                    onClick={() => {window.location.href="/"}}
                    to="/">
                    <span>Marvel</span> information portal
                </NavLink>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        className="header_nav"
                        exact
                        onClick={() => {window.location.href="/"}}
                        to="/">Characters</NavLink></li>
                    /
                    <li><NavLink
                        className="header_nav"
                        onClick={() => {window.location.href="/marvel/comics"}}
                        to="/marvel/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;