const unitOne = document.querySelector('.unit-one')
const unitTwo = document.querySelector('.unit-two')
const changetBtn = document.querySelector('.change')
const convertInput = document.querySelector('.convert-input')
const result = document.querySelector('.result')
const convertBtn = document.querySelector('.convert')

function changeUnit() {
	if (unitOne.textContent == '°C') {
		unitOne.textContent = '°F'
		unitTwo.textContent = '°C'
	} else {
		unitOne.textContent = '°C'
		unitTwo.textContent = '°F'
	}
}

function celsiusToFahrenheit() {
	const far = convertInput.value * 1.8 + 32
	result.textContent = `${convertInput.value}°C to ${far.toFixed(1)}°F`
	convertInput.value = ''
}

function fahrenheitToCelsius() {
	const cel = (convertInput.value - 32) / 1.8
	result.textContent = `${convertInput.value}°F to ${cel.toFixed(1)}°C`
	convertInput.value = ''
}

function convert() {
	if (convertInput.value != '') {
		if (unitOne.textContent === '°C') {
			celsiusToFahrenheit()
		} else {
			fahrenheitToCelsius()
		}
	} else {
		result.textContent = 'Wprowadź poprawną wartość'
	}
}

changetBtn.addEventListener('click', changeUnit)
convertBtn.addEventListener('click', convert)
