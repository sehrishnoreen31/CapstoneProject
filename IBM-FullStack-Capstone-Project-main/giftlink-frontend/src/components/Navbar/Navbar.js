import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { urlConfig } from '../../config';
import { useAppContext } from '../../context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useAppContext();

    const navigate = useNavigate();
    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('auth-token');
        const nameFromSession = sessionStorage.getItem('name');
        if (authTokenFromSession) {
            if (isLoggedIn && nameFromSession) {
                setUserName(nameFromSession);
            } else {
                sessionStorage.removeItem('auth-token');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                setIsLoggedIn(false);
            }
        }
    }, [isLoggedIn, setIsLoggedIn, setUserName])
    const handleLogout = () => {
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        setIsLoggedIn(false);
        navigate(`/app`);

    }
    const profileSecton = () => {
        navigate(`/app/profile`);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar_container'>
                <a className="navbar-brand" href={`${urlConfig.backendUrl}/app`}>GiftLink</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/app">Gifts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/app/search">Search</a>
                        </li>
                        <ul className="navbar-nav ml-auto">
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item"> <span className="nav-link" style={{ color: "black", cursor: "pointer" }} onClick={profileSecton}>Welcome, {userName}</span> </li>
                                    <li className="nav-item"><button className="nav-link login-btn" onClick={handleLogout}>Logout</button></li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">

                                        <a className="nav-link login-btn" href="/app/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link register-btn" href="/app/register">Register</a>
                                    </li>
                                </>
                            )

                            }
                        </ul>
                    </ul>
                </div>
            </nav>
        </>
    )
}