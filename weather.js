const API_KEY = "4a950e59c9a7126d30404b715599dba0"

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.latitude;
}

function onGeoError(){
    alert("can't find location.");

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

