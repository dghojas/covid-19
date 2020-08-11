import React, { createContext, useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { covidAllGet, covidCountriesGet, covidCountriesQuery } from './../constants';

export const CountryContext = createContext();

const CountryContextProvider = () => {
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountries(), []);

    const getCountriesAll = () => {
        fetch(covidAllGet())
            .then((res) => res.json())
            .then((data) => {
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

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;

        /*const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;*/

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
        <FormControl>
            <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
            >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {
                    countries.map((country) => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))
                }
            </Select>

            <div>todayRecovered: {countryInfo.todayRecovered}</div>
            <div>recovered: {countryInfo.recovered}</div>
        </FormControl>
    );
};

export default CountryContextProvider;