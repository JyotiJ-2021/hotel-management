import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase.config.js';
import { createContext } from 'react';
export const ThemeContext = createContext(null);
const Layout = (props) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    const navigate = useNavigate();
    const [name, setName] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/');
            }
            setName(user.displayName);
        });
    }, [navigate]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <NavBar name={name} theme={theme} />
                {props.children}
                <footer>Copyright</footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Layout;
