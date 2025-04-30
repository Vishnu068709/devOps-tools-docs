import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1>DevOps Tools Documentation</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/commands">Command Examples</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;