import React, { Fragment } from 'react';

import Header from './components/Common/Header';
import CovidContextProvider from './contexts/CovidContext';
import Countries from './components/Countries/Countries';
import Footer from './components/Common/Footer';

const App = () => (
    <div className="app">
        <Fragment>
            <Header />
            <CovidContextProvider>
                <Countries />
            </CovidContextProvider>
            <Footer />
        </Fragment>
    </div>
);

App.displayName = 'App';

export default App;
