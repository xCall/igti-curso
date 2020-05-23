/*
  * Estado da aplicação (state)
*/

let url = 	'http://restcountries.eu/rest/v2/all'

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
  totalPopulationList = document.querySelector('#totalPopulationFavorites')

  numerFormat = Intl.NumberFormat('pt-BR')

  fetchCountries()

})

async function fetchCountries() {

	const res = await fetch(url)
	const json = await res.json()

	allCountries = json.map(country => {

		const { numericCode, translations,population, flag} = country

		return {
			id: numericCode,
			name: translations.br,
			population,
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

		const { name, flag, id, population} = country

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
				 		<li>${population}</li>
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

		const {name, flag, id, population} = country

		const favoriteCountryHTML = `
			<div class="country">
				 <div>
				 	<a id="${id}" class="waves-effect waves-light red darken-4  btn">+</a>
				 </div>
				 <div>
				 <img src="${flag}" alt="${name}">
				 </div>
				 <div>
				 	<ul>
				 		<li>${name}</li>
				 		<li>${population}</li>
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

}

function handleCountryButtons() {}
