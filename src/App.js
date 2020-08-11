import React, { Fragment } from 'react';

import './assets/css/styles.scss';
import Header from './components/Common/Header';

import CountryContextProvider from './contexts/CountryContext';
import Footer from './components/Common/Footer';

const App = () => (
    <Fragment>
        <Header />
        <CountryContextProvider />
        <Footer />
    </Fragment>
);

App.displayName = 'App';

export default App;
