const unitOne = document.querySelector('.unit-one')
const unitTwo = document.querySelector('.unit-two')
const changetBtn = document.querySelector('.change')

function changeUnit() {
	if (unitOne.textContent == '°C') {
		unitOne.textContent = '°F'
		unitTwo.textContent = '°C'
	} else {
		unitOne.textContent = '°C'
		unitTwo.textContent = '°F'
	}
}

changetBtn.addEventListener('click', changeUnit)
