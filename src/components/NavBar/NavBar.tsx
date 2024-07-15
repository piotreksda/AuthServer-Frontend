import { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface MenuItem {
    title: string;
    src: string;
    dest: string;
}

interface NavBarState {
    sideMenuOpen: boolean;
    userContextOpen: boolean;
    currentPage: string;
}

export default function NavBar() {
    const Menus: MenuItem[] = [
        { title: "Dashboard", src: "dashboard.svg", dest: "/" },
        { title: "Map", src: "map.svg", dest: "/map" },
        { title: "Stats", src: "stats.svg", dest: "/statistics" },
        { title: "Terminal", src: "terminal.svg", dest: "/cli" },
        { title: "Settings", src: "settings.svg", dest: "/settings" },
    ];

    const [state, setState] = useState<NavBarState>({
        sideMenuOpen: false,
        userContextOpen: false,
        currentPage: Menus[0].title,
    });

    const location = useLocation();
    const { isLoggedIn, logout } = useAuth();

    const changeCurrentPage = (title: string) => {
        setState((prevState) => ({
            ...prevState,
            userContextOpen: false,
            sideMenuOpen: false,
            currentPage: title,
        }));
    };

    const toggleSideMenu = () => {
        setState((prevState) => ({
            ...prevState,
            sideMenuOpen: !prevState.sideMenuOpen,
        }));
    };

    const toggleUserContextMenu = () => {
        setState((prevState) => ({
            ...prevState,
            userContextOpen: !prevState.userContextOpen,
        }));
    };

    return (
        <>
            <div className="navbar">
                <img
                    alt="menu"
                    src={state.sideMenuOpen ? "xmark.svg" : "hamburger.svg"}
                    className="hamburger"
                    onClick={toggleSideMenu}
                />
                <h1>{state.currentPage}</h1>
                <img
                    className="usericon"
                    src="img_avatar.png"
                    alt="Avatar"
                    onClick={toggleUserContextMenu}
                />
            </div>
            <div className={`sidemenu ${state.sideMenuOpen ? 'active' : ''}`}>
                {Menus.map((menu, index) => (
                    <Link to={menu.dest} key={index} onClick={() => changeCurrentPage(menu.title)}>
                        <div className={`menu-item ${location.pathname === menu.dest ? 'active' : ''}`}>
                            <img className="icon" alt={menu.title} src={menu.src} />
                            <div className="text">{menu.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
            {state.userContextOpen && (
                <div className="userContextMenu">
                    <Link to="profile" onClick={() => changeCurrentPage("Profile")}>
                        <div className="userContextItem">
                            <img alt="" src="xmark.svg" className="userContextItemIcon" />
                            <div className="userContextItemText">Profile</div>
                        </div>
                    </Link>
                    <div className="userContextItem" onClick={logout}>
                        <img alt="" src="xmark.svg" className="userContextItemIcon" />
                        <div className="userContextItemText">Logout</div>
                    </div>
                </div>
            )}
        </>
    );
}
