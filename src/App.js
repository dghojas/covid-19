import React, { Fragment } from 'react';

import Header from './components/Common/Header';
import CountryContextProvider from './contexts/CountryContext';
import Footer from './components/Common/Footer';

const App = () => (
    <div className="app">
        <Fragment>
            <Header />
            <CountryContextProvider />
            <Footer />
        </Fragment>
    </div>
);

App.displayName = 'App';

export default App;
