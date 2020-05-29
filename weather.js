const weather = document.querySelector("js-weather");

const API_KEY ="938a92216bb333e6a66089da7f1510f9";
const COORDS = "coords";

function gteWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnn}&appid={API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}@ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude =  position.coords.longitude;
    const coordsObj ={
        latitude, 
        longitude
    };
    saveCoords(coordsObj);
    gteWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        gteWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();