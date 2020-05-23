window.addEventListener('load', () => {

  doMap()
  doFilter()
  doForEach()
  doReduce()
  doFind()
  doSome()
  doEvery()
  doSort()

})

function doMap() {

  const nameEmailArray = peoples.results.map(person => {

    return {
      name: person.name,
      email: person.email
    }

  })

  console.log(nameEmailArray)

  return nameEmailArray

}

function doFilter() {

  const olderThan18 = peoples.results.filter(person => {

    return person.dob.age > 18

  })

  console.log(olderThan18)

}

function doForEach() {

  const mappedPeople = doMap()

  mappedPeople.forEach(person => {

    person.nameSize = person.name.title.length + person.name.first.length + person.name.last.length

  })

  console.log(mappedPeople)

}

function doReduce() {

  const totalAges = peoples.results.reduce((accumullator, current) => {

    return accumullator + current.dob.age

  }, 0)

  console.log(totalAges)

}

function doFind() {

  const found = peoples.results.find(person => {

    return person.location.state === 'Minas Gerais'

  })

  console.log(found)

}

function doSome() {
  const found = peoples.results.some(person => {

    return person.location.state === 'Minas Gerais'

  })

  console.log(found)

}

function doEvery() {

  const every = peoples.results.every(person => {

    return person.nat === 'US'

  })

  console.log(every)

}

function doSort() {

  const mappedNames = peoples.results.map(person => {

    return {name: person.name.first}

  }).filter(person => {
    
    return person.name.startsWith('J')

  }).sort((a, b) => {

    return a.name.localeComapare(b.name)

  })

  console.log(mappedNames)

}