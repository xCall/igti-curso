window.addEventListener('load', () => {

  doFetch()
  doFetchAsync()
  executeDivisonPromise()
  executeDivisonPromiseAsyncAwait()

})

function doFetch() {

  fetch('https://api.github.com/users/xCall').then(res => {

    res.json().then(data => {

      showData(data)

    })

  }).catch(err => {

    console.log(err)

  })

}

async function doFetchAsync() {

  const res = await fetch('https://api.github.com/users/xCall')
  const json = await res.json()

  console.log(json)

}

function showData(data) {

  const user = document.querySelector('#user')

  user.textContent = `${data.login} ${data.name}`

}

function divisionPromise(a, b) {

  return new Promise((resolve, reject) => {

    if (b === 0) {

      reject('Não é possivel dividir por zero')

    }

    resolve(a / b)

  })

}

function executeDivisonPromise() {

  divisionPromise(12, 10).then(res => {

    console.log(res)

  }).catch(err => {

    console.log(`falha na divisão, ${err}`)

  })

}

async function executeDivisonPromiseAsyncAwait() {

  const division = await divisionPromise(12, 20)
  
  console.log(division)

}