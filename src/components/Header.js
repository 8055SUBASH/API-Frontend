import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menu, updateMenu] = useState(false);
    const menuButton = () => {
        updateMenu(!menu)
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand"><NavLink to="/" className="navbar-brand">API <span> Learning</span></NavLink></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => menuButton()}>
                            <span className="oi oi-menu"></span> Menu
                        </button>

                        <div className={ menu ? "navbar-collapse" : "collapse navbar-collapse"} id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <NavLink to="/" className="nav-item"><a href="index.html" className="nav-link">Home</a></NavLink>
                                <NavLink to="/Get" className="nav-item"><a href="get.html" className="nav-link">GET</a></NavLink>
                                <NavLink to="/Post" className="nav-item"><a href="post.html" className="nav-link">POST</a></NavLink>
                                <NavLink to="/Put" className="nav-item"><a href="put.html" className="nav-link">PUT</a></NavLink>
                                <NavLink to="/Delete" className="nav-item"><a href="delete.html" className="nav-link">DELETE</a></NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header;