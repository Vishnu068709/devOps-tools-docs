import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} DevOps Tools Documentation. All rights reserved.</p>
        </footer>
    );
};

export default Footer;