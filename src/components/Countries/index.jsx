import React, { Fragment, useContext } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Cases from '../Cases';
import Recovered from '../Recovered';
import Deaths from '../Deaths';

import { CovidContext } from '../../contexts/CovidContext';

const Countries = () => {
    const { country, countryInfo, countries, onCountryChange } = useContext(
        CovidContext
    );

    const handleChange = (e) => {
        const idCountry = e.target.value;
        onCountryChange(idCountry);
    };

    console.log(countryInfo.country);

    return (
        <Fragment>
            <div className="wrapper">
                <div className="app__header">
                    <h1>COVID-19: {countryInfo.country}</h1>
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
                        title="Cases"
                        cases={countryInfo.todayCases}
                        total={countryInfo.cases}
                    />
                    <Recovered
                        title="Recovered"
                        cases={countryInfo.todayRecovered}
                        total={countryInfo.recovered}
                    />
                    <Deaths
                        title="Deaths"
                        cases={countryInfo.todayDeaths}
                        total={countryInfo.deaths}
                    />
                </div>
            </div>
        </Fragment>
    );
};
Countries.displayName = 'Countries';
export default Countries;
