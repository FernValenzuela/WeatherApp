window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            long = position.longitude;
            lat = position.coords.latitude;
        });
    }else{
        h1.textContent = "Uh oh something went wrong."
    }
});