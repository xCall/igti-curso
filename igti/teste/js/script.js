let allSexM = 0
let allSexF = 0

let somAges = 0
let middleAges = 0

let countPeople = 0
let i = 0

let allPeople = []
let resultPeople = []

let resultSearch = null
let resultSum = null
let inputDataSearch = null

let btnSearch


let url = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'

window.addEventListener('load', () => {

	resultSearch = document.querySelector('#resultSearch')
	resultSum = document.querySelector('#resultSum')
	inputDataSearch = document.querySelector('#inputDataSearch')
	btnSearch = document.querySelector('#btnSearch')

	fetchPeoples()
	searchData()


	//console.log(inputDataSearch)
	//initSearch(inputDataSearch)

})

async function fetchPeoples() {

	const res = await fetch(url)
	const json = await res.json()

	allPeople = json.results.map(people => {

		const { name, age, sex, avatar} = people

/*		const nameFirst = {



		} */

		return {

			name: people.name,
			age: people.dob.age,
			sex: people.gender,
			avatar: people.picture.thumbnail

		}

		name

	})

	render()

	console.log()
}

function render() {

	//renderSumary()
	renderListPeoples()

}

function renderSumary() {

	let allDataHTML = '<div>'

	allPeople.forEach(data => {

		const {name, age, sex, avatar} = data

		const dataListHTML = `
			<div class="list-data">
				<div>
					<span>Sexo masculino:</span>
					<span>Sexo feminino:</span>
					<span>Soma das idades:</span>
					<span>Média das idades:</span>
				</div>
			</div>
		`

		allDataHTML += dataListHTML
	})

	allDataHTML += '</div>'

	resultSum.innerHTML = allDataHTML

}

function renderListPeoples() {

	let peopleHTML = '<div>'

	allPeople.forEach(people => {

		const { name, age, sex, avatar} = people

		const peopleListHTML = `
			<div class="list-peoples">
				<div>
					<span><img src="${avatar}">${name.first} ${name.last}, ${age} anos</span>
				</div>
			</div>

		`

		peopleHTML += peopleListHTML

	})

	peopleHTML += '</div>'

	resultSearch.innerHTML = peopleHTML

}

function searchData() {

	const inputValueData = document.querySelector('#inputDataSearch').addEventListener('Keyup', e => {

			console.log(inputValueData.value = 'text')

	})


		inputDataSearch.addEventListener('keyup', event => {

			/*const result = allPeople.results.filter(person => {

				if(person.name.first === inputValueData || person.name.last === inputValueData) {

					const  res = [...result, ...allPeople]

				}

				return console.log(res)

			})*/


			console.log(inputValueData)

		})

		console.log(inputValueData)

}

/*function initSearch(value) {

	const peopleSeach = allPeople.results.filter(people => {

		const nameFirst = people.results.name.first
		const nameLast = people.results.name.last

		if(nameFirst == '') {}

			return

	})

	btnSearch.addEventListener('click', event => {



	})

}*/