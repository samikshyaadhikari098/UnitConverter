/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let val = document.getElementById('inputValue')
let conversion = document.getElementById('lengthConversion')
let volume = document.getElementById('volumeConversion')
let mass = document.getElementById('massConversion')



function convert(){
    let val2 = val.value
    const infeet = (val2 * 3.28084).toFixed(0)
    conversion.innerHTML = ''
    conversion.innerHTML = `<p>${val2} Meter </p>&nbsp;&nbsp;&nbsp;&nbsp;${infeet} feet`
    const gallons = (val2 * 0.264172).toFixed(0)
    volume.innerHTML = ''
    volume.innerHTML = `<p>${val2} liters </p>&nbsp;&nbsp;&nbsp;&nbsp;${gallons} gallons`
    const pound = (val2 * 2.20462).toFixed(0)
    mass.innerHTML = ''
    mass.innerHTML = `<p>${val2} Kilogram </p>&nbsp;&nbsp;&nbsp;&nbsp;${pound} pounds`




}