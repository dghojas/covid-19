const base_url = 'https://disease.sh/v3/covid-19/';

const covid_all = 'all';
const covid_countries = 'countries/';

export const countryAll = () => `${base_url}${covid_all}`;
export const countriesGet = () => `${base_url}${covid_countries}`;
export const countriesQuery = q_countries => `${base_url}${covid_countries}${q_countries}`;