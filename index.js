var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "9973ac6f580ee0c9b5a86cc8e6a29e4e"

function convertion(val){
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var namval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${namval}<span>`
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`
        })
        .catch(err => alert('You entered Wrong city name! '))
})
