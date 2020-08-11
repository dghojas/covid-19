import React from 'react';

import './Footer.styles.scss';

const Footer = () => (
    <footer>
        <p>&copy; {new Date().getFullYear()} - Daniel Godoy - @dghojas</p>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;
