import React from 'react';
import './Header.styles.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/img/logo.svg';

const Header = () => (
    <AppBar position="sticky" className="header">
        <Toolbar>
            <img className="logo__header" src={logo} alt="logo covid-19 coronavirus" />
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';

export default Header;
