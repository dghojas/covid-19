import React, { Fragment, useContext, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { prettyPrintStat } from './../../utils';
import numeral from 'numeral';
import { CovidContext } from '../../contexts/CovidContext';

import Cases from '../Cases';
import Recovered from '../Recovered';
import Deaths from '../Deaths';

const Countries = () => {
    const { country, countryInfo, countries, onCountryChange } = useContext(
        CovidContext
    );

    const [casesType, setCasesType] = useState('cases');

    const handleChange = (e) => {
        const idCountry = e.target.value;
        onCountryChange(idCountry);
    };

    return (
        <Fragment>
            <div className="wrapper">
                <Container>
                    <div className="app__header">
                        <div className="app__title">
                            <div className="blob red"></div>
                            <h1>
                                COVID-19:{' '}
                                {countryInfo.country !== undefined
                                    ? countryInfo.country
                                    : 'Worldwide'}
                            </h1>
                        </div>
                        <FormControl className="app__dropdown">
                            <Select
                                variant="outlined"
                                value={country}
                                onChange={handleChange}
                            >
                                <MenuItem key="0" value="worldwide">
                                    Worldwide
                                </MenuItem>
                                {countries.map((country, key) => (
                                    <MenuItem key={key} value={country.value}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="app__stats">
                        <Cases
                            onClick={(e) => setCasesType('cases')}
                            title="Coronavirus Cases"
                            isRed
                            active={casesType === 'cases'}
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={numeral(countryInfo.cases).format('0.0a')}
                        />
                        <Recovered
                            onClick={(e) => setCasesType('recovered')}
                            title="Recovered"
                            active={casesType === 'recovered'}
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={numeral(countryInfo.recovered).format(
                                '0.0a'
                            )}
                        />
                        <Deaths
                            onClick={(e) => setCasesType('deaths')}
                            title="Deaths"
                            isRed
                            active={casesType === 'deaths'}
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={numeral(countryInfo.deaths).format('0.0a')}
                        />
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};
Countries.displayName = 'Countries';
export default Countries;
