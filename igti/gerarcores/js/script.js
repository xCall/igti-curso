
let rangeRed = null
let rangeGreen = null
let rangeBlue = null

let inputTextRed = null
let inputTextGreen = null
let inputTextBlue = null

let divSquare = null

let r = 0
let g = 0
let b = 0


window.addEventListener('load', ()=>{

  mapElements()
  render()

})

function mapElements() {

  rangeRed = document.querySelector('#rangeRed')
  rangeGreen = document.querySelector('#rangeGreen')
  rangeBlue = document.querySelector('#rangeBlue')

  inputTextRed = document.querySelector('#inputTextRed')
  inputTextGreen = document.querySelector('#inputTextGreen')
  inputTextBlue = document.querySelector('#inputTextBlue')

  divSquare = document.querySelector('#divSquare')

  rangeRed.addEventListener('change', handleInputRangeChange)
  rangeGreen.addEventListener('change', handleInputRangeChange)
  rangeBlue.addEventListener('change', handleInputRangeChange)

}

function handleInputRangeChange(event) {

  const value = event.target.value
  const id = event.target.id

  switch (id) {

    case 'rangeRed':
      r = value
      break
    case 'rangeGreen':
      g = value
      break
    case 'rangeBlue':
      b = value
      break

  }

  render()

}

function render() {

  divSquare.style.backgroundColor = `rgb(${r},${g},${b})`
  
  inputTextRed.value = r
  inputTextGreen.value = g
  inputTextBlue.value = b

}