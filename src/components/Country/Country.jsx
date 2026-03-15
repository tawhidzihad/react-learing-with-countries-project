const Country = ({ country }) => {
	const currenciesCode = Object.keys(country.currencies?.currencies)[0];
	const currencyName = country.currencies?.currencies[currenciesCode]?.name;
	const currencySymbol =
		country.currencies?.currencies[currenciesCode]?.symbol;

	// console.log(currenciesCode[0]);

	return (
		<div className="containerStye">
			<img src={country.flags?.flags?.png} alt={country.flags.flags?.alt} />
			<p className="h1Style">Country Name: {country.name?.common}</p>
			<p>Capital City: {country.capital?.capital}</p>
			<p>Population: {country.population?.population}</p>

			<p>
				Currency: {currencyName} / Symbol: {currencySymbol}
			</p>
		</div>
	);
};

export default Country;
