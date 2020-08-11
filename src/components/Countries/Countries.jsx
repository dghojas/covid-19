import React, { Fragment, useContext, useState } from 'react';
import { CountryContext } from '../../contexts/CountryContext';
import { covidAllGet, covidCountriesQuery } from './../../constants';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Countries = () => {
    const { countryAll, countries } = useContext(CountryContext);
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});

    // setCountryInfo(countryAll);

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        const url =
            countryCode === "worldwide"
                ? covidAllGet()
                : covidCountriesQuery(countryCode);
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
                        countries.map((country) => (
                            <MenuItem key={country.id} value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <div>todayRecovered: {countryInfo.todayRecovered}</div>
            <div>recovered: {countryInfo.recovered}</div>
        </Fragment>
    )
};

Countries.displayName = 'Countries';

export default Countries;