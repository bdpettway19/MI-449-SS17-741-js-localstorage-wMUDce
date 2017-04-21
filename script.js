var Daybutton = document.getElementById('day-theme')
var Nightbutton = document.getElementById('night-theme')
var lastChoice = window.localStorage.getItem('class')
// if localStorage has saved 'day'
// then SetColor('day')

// if localStorage has saved 'night'
// then SetColor('night')

// if localStorage doesn't have anything saved
// then what??
function setColor (time) {
  if (time === 'day') {
    document.getElementById('body').className = 'day'
    window.localStorage.setItem('class', 'day')
  } else {
    document.getElementById('body').className = 'night'
    window.localStorage.setItem('class', 'night')
  }
}
Daybutton.addEventListener('click', function () {
  setColor('day')
})
Nightbutton.addEventListener('click', function () {
  setColor('night')
})
document.getElementById('body').className = lastChoice

function loadpage () {
  var loaded = parseInt(window.localStorage.getItem('loaded'))
  var loadedNumb = loaded ? loaded + 1 : 1
  window.localStorage.setItem('loaded', loadedNumb)

  document.getElementById('loaded').innerHTML = '<p>This page was loaded by you ' + loadedNumb + ' times !</p>'
};

loadpage()
