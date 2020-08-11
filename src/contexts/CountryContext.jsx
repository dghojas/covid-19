import React, { createContext, useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { covidAllGet, covidCountriesGet } from './../constants';

export const CountryContext = createContext();

const CountryContextProvider = () => {

    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountries(), []);

    const getCountriesAll = () => {
        fetch(covidAllGet())
            .then(res => res.json())
            .then(data => {
                console.log('All => ' + data);
                setCountryInfo(data);
            })
            .catch(error => console.log(error));
    };

    const getCountries = async () => {
        fetch(covidCountriesGet())
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2
                }));
                setCountries(countries);
            })
            .catch(error => console.log(error));
    };



    return (
        <FormControl>
            <Select>
                <MenuItem>Worldwide</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CountryContextProvider;