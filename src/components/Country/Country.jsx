import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
	const currenciesCode = Object.keys(country.currencies?.currencies)[0];
	const currencyName = country.currencies?.currencies[currenciesCode]?.name;
	const currencySymbol =
		country.currencies?.currencies[currenciesCode]?.symbol;

	// console.log(country.area.area);
	// console.log(handleVisitedCountries);

	const [visited, setVisited] = useState(false);

	const handleVisited = () => {
		/* 
			*System One 1
			if (visited) {
				setVisited(false);
			} else {
				setVisited(true);
			}
		*/

		/*
			* System Two 2 
			 setVisited(visited ? false : true) 
		*/

		/*
			*System Three 3
			setVisited(!visited);
		*/

		setVisited(!visited);
		handleVisitedCountries(country);
	};

	return (
		// <div className={`country ${visited ? "country_visited" : "country_not_visited"}`}>

		<div className={`country ${visited && "country_visited"}`}>
			<img
				src={country.flags?.flags?.png}
				alt={country.flags.flags?.alt}
			/>
			<h4>Country Name: {country.name?.common}</h4>
			<p>Capital City: {country.capital?.capital}</p>
			<p>Population: {country.population?.population}</p>
			<p>
				Area: {country.area.area} :
				{country.area.area > 300000 ? " Big Country" : " Small Country"}
			</p>

			<p>
				Currency: {currencyName} / Symbol: {currencySymbol}
			</p>

			<button onClick={handleVisited}>
				{visited ? "Visited" : "Not Visited"}
			</button>
		</div>
	);
};

export default Country;

/*****
 * 1: Inline CSS using {} object with style={}
 * 2:
 */
