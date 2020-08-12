import React, { Fragment, useContext, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { CovidContext } from '../../contexts/CovidContext';
import { countryAll, countriesQuery } from './../../constants';

const Countries = () => {
    const { countriesAll, countries } = useContext(CovidContext);

    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        const url =
            countryCode === "worldwide"
                ? countryAll()
                : countriesQuery(countryCode);
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setInputCountry(countryCode);
                setCountryInfo(data);
            });
    };

    return (
        <Fragment>
            <FormControl>
                <Select
                    variant="outlined"
                    value={country}
                    onChange={onCountryChange}
                >
                    <MenuItem key="0" value="worldwide">Worldwide</MenuItem>
                    {
                        countries.map((country, key) => (
                            <MenuItem key={key} value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                </Select>

                <div>TodayRecovered: {countryInfo.todayRecovered}</div>
                <div>Recovered: {countryInfo.recovered}</div>
            </FormControl>
        </Fragment>
    );

};

Countries.displayName = 'Countries';

export default Countries;