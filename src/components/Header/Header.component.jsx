import React from "react";
import { NavLink } from "react-router-dom";



const Header = ({ title, menus }) => {

    return (<div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">{title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {menus.map(menu =>

                            <li className="nav-item">
                                <NavLink exact  className="nav-link" aria-current="page" to={menu.linkUrl}>{menu.text}</NavLink>
                            </li>
                        )}

                    </ul>

                </div>
            </div>
        </nav>

    </div>)



}

// Header.defaultProps={
//     title:'dedault title',
//     menus:[
//         {
//             text:'default Link 1',
//             linkUrk:'/'
//         }
//     ]

// }
export default Header;