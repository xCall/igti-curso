var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')

var redOutput = document.querySelector('#redOutput')
var greenOutput = document.querySelector('#greenOutput')
var blueOutput = document.querySelector('#blueOutput')



var box = document.querySelector('.boxColor')

box.style.backgroundColor = `rgb(50,255,200)`

console.log(red.value, green.value, blue.value)


  red.addEventListener('click', (event) => {

    console.log(parseInt(red))

  })
