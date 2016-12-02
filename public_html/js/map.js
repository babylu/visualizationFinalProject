//initial map canvas
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osm = L.tileLayer(osmUrl, {maxZoom: 17});
var map = L.map('map');
map.setView([40.4521, -79.9650156], 13);
map.addLayer(osm);
createMap([]);



//add & refresh markers
function createMap(arrHighlight){
    d3.json("./dataFile/Station_info.json",function(arr){
        
        //set highlight icon
        var myIcon = L.icon({iconUrl:'./img/marker-icon-2x_red.png',
                            iconAnchor: [12,41],
                            shadowUrl:'https://unpkg.com/leaflet@1.0.1/dist/images/marker-shadow.png',
                            iconSize: [25,41]});

        //clear old marker
        $(".leaflet-marker-pane").empty();
        $(".leaflet-shadow-pane").empty();

        //add new marker
        for(var i =0;i<arr.length;i++){
            if(match(arr[i].id,arrHighlight)){
                map.addLayer(new L.Marker(new L.latLng(arr[i].Latitude, arr[i].Longitude),{icon: myIcon}));	
            }else{
                map.addLayer(new L.Marker(new L.latLng(arr[i].Latitude, arr[i].Longitude)));
            }
       }
    });
}

//return whether the station is highlight or not
function match(id,arr){
    for(var i=0;i<arr.length;i++){
        if(id === arr[i]) return true;
    }
    return false;
}
