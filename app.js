window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            long = position.longitude;
            lat = position.coords.latitude;

            const api = 'https://api.weatherapi.com/v1/forecast.json?key=11210757a88e4b2898a04644232804&q=79045&days=7&aqi=yes&alerts=yes';
            
        });

        fetch(api)
            .then(data)
    }else{
        h1.textContent = "Uh oh something went wrong."
    }
});