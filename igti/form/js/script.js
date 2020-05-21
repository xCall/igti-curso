window.addEventListener('load', start)

var globalNames = ['teste', 'teste']

var inputName = null
var currentIndex = null

var isEditing = false

function start() {

  inputName = document.querySelector('#inputName')

  preventFormSubmit()
  activateInput()
  render()

}

function activateInput() {

  function insertName(newName) {

    globalNames.push(newName)

  }

  function updateName(editName) {

    globalNames[currentIndex] = editName
    
  }

  function handleTyping(event) {

    var hasText = !!event.target.value && event.target.value.trim()

    if (event.key === 'Enter' && hasText) {

      if (isEditing) { updateName(event.target.value) }
      else { insertName(event.target.value) }

      isEditing = false

      render()

      clearInput(inputName)

    }

  }

  inputName.focus()

  inputName.addEventListener('keyup', handleTyping)

}

function preventFormSubmit() {

  function handleFormSubmit(event) {

    event.preventDefault()

  }

  let form = document.querySelector('form')

  form.addEventListener('submit', handleFormSubmit)

}

function render() {

  function buttonDelete(index) {

    var button = document.createElement('button')

    button.textContent = 'x'

    button.classList.add('deleteButton')

    button.addEventListener('click', () => {

      globalNames.splice(index, 1)

      render()

    })

    return button

  }

  function createSpan(currentName, index) {

    var span = document.createElement('span')

    span.textContent = currentName

    span.classList.add('clickable')

    span.addEventListener('click', () => {

      inputName.value = currentName
      inputName.focus()

      isEditing = true

      currentIndex = index

    })

    return span

  }

  var divNames = document.querySelector('#names')

  divNames.innerHTML = ''

  var ul = document.createElement('ul')

  for (var i = 0; i < globalNames.length; i++) {

    var currentName = globalNames[i]

    var button = buttonDelete(i)

    var li = document.createElement('li')

    var span = createSpan(currentName, i)

    li.appendChild(button)

    li.appendChild(span)

    ul.appendChild(li)

  }

  divNames.appendChild(ul)

}

function clearInput(valuesCamp) {

  valuesCamp.value = ''

  valuesCamp.focus()

}