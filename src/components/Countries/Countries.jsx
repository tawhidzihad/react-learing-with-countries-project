import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
	const [visitedCountries, setVisitedCountries] = useState([]);

	const handleVisitedCountries = (country) => {
		console.log("Handle visited country clicked", country);
	};

	const countriesData = use(countriesPromise);
	const countries = countriesData.countries;

	return (
		<div>
			<h1>In The Countries {countries.length}</h1>
			<h3>Total Visited Country: </h3>
			<div className="countries">
				{countries.map((country) => (
					<Country
						key={country.cca3.cca3}
						country={country}
						handleVisitedCountries={handleVisitedCountries}
					></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
