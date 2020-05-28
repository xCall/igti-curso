/*
  * Estado da aplicação (state)
*/

let url = 'http://restcountries.eu/rest/v2/all'

let tabCountries = null
let tabFavorites = null

let allCountries = []
let favoritesCountries = []

let countCountries = 0
let countFavorites = 0

let totalPopulationList = 0
let totalPopulationFavorites = 0

let numberFormat = null

window.addEventListener('load', () => {

	tabCountries = document.querySelector('#tabCountries')
	tabFavorites = document.querySelector('#tabFavorites')
	countCountries = document.querySelector('#countCountrys')
	countFavorites = document.querySelector('#countFavorites')
	totalPopulationList = document.querySelector('#totalPopulationList')
	totalPopulationFavorites = document.querySelector('#totalPopulationFavorites')

	numberFormat = Intl.NumberFormat('pt-BR')

	fetchCountries()

})

async function fetchCountries() {

	const res = await fetch(url)
	const json = await res.json()

	allCountries = json.map(country => {

		const { numericCode, translations, population, flag } = country

		return {
			id: numericCode,
			name: translations.br,
			population,
			formattedPopulation: formatNumber(population),
			flag
		}

	})

	render()

}

function render() {

	renderFavorites()
	renderCountryList()
	renderSummary()
	handleCountryButtons()

}

function renderCountryList() {

	let countriesHTML = "<div>"

	allCountries.forEach(country => {

		const { name, flag, id, population, formattedPopulation } = country

		const countryHTML = `
			<div class="country">
				 <div>
				 	<a id="${id}" class="waves-effect waves-light btn">+</a>
				 </div>
				 <div>
				 <img src="${flag}" alt="${name}">
				 </div>
				 <div>
				 	<ul>
				 		<li>${name}</li>
				 		<li>${formattedPopulation}</li>
				 	</ul>
				 </div>
			</div>
		`

		countriesHTML += countryHTML
	})

	countriesHTML += '</div>'

	tabCountries.innerHTML = countriesHTML

}

function renderFavorites() {

	let favoritesHTLM = "<div>"

	favoritesCountries.forEach(country => {

		const { name, flag, id, population, formattedPopulation } = country

		const favoriteCountryHTML = `
			<div class="country">
				 <div>
				 	<a id="${id}" class="waves-effect waves-light red darken-4  btn">-</a>
				 </div>
				 <div>
				 <img src="${flag}" alt="${name}">
				 </div>
				 <div>
				 	<ul>
				 		<li>${name}</li>
				 		<li>${formattedPopulation}</li>
				 	</ul>
				 </div>
			</div>
		`

		favoritesHTLM += favoriteCountryHTML

	})

	favoritesHTLM += "</div>"

	tabFavorites.innerHTML = favoritesHTLM

}

function renderSummary() {


	countCountries.textContent = allCountries.length
	countFavorites.textContent = favoritesCountries.length

	const totalPopulation = allCountries.reduce((acc, current) => {

		return acc + current.population

	}, 0)

	const totalFavorites = favoritesCountries.reduce((acc, current) => {

		return acc + current.population

	}, 0)

	totalPopulationList.textContent = formatNumber(totalPopulation)
	totalPopulationFavorites.textContent = formatNumber(totalFavorites)

}

function handleCountryButtons() {

	const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'))
	const favoritesButtons = Array.from(tabFavorites.querySelectorAll('.btn'))

	countryButtons.forEach(button => {

		button.addEventListener('click', () => addToFavorites(button.id))

	})

	favoritesButtons.forEach(button => {

		button.addEventListener('click', () => removeToFavorites(button.id))

	})

}

function addToFavorites(id) {

	const countryToAdd = allCountries.find(button => button.id === id)

	favoritesCountries = [...favoritesCountries, countryToAdd]

	favoritesCountries.sort((a, b) => {

		return a.name.localeCompare(b.name)

	})

	allCountries = allCountries.filter(country => country.id !== id)

	render()

}


function removeToFavorites(id) {


	const countryToRemove = favoritesCountries.find(button => button.id === id)

	allCountries = [...allCountries, countryToRemove]

	allCountries.sort((a, b) => {

		return a.name.localeCompare(b.name)

	})

	favoritesCountries = favoritesCountries.filter(country => country.id !== id)

	render()

}

function formatNumber(number) {

	return numberFormat.format(number)

}