window.addEventListener('load', () => {

  doSpread()
  doRest()
  doDestructuring()

})

function doSpread() {

  const marriedMen = peoples.results.filter(person => person.name.title === 'Mr')
  const marriedWomen = peoples.results.filter(person => person.name.title === 'Ms')

  console.log(marriedMen)
  console.log(marriedWomen)

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: "Oi" }]

  console.log(marriedPeople)

}

function doRest() {

  console.log(infiniteSum(1, 2, 3, 20, 50, 999999))

}

function infiniteSum(...numbers) {

  return numbers.reduce((acc, curr) => {

    return acc + curr

  }, 0)

}

function doDestructuring() {

  const first = peoples.results[0]

  /* const username = first.login.username
  const password = first.login.password */

  const { username, password } = first.login

  console.log(username, password)

}