/*
var heatmapData = [ie new google.maps.LatLng(37.782551, -122.445368),
new google.maps.LatLng(37.782745, -122.444586)]
# add user reports into heatmapData
*/
// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
// refer to our page 2

var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 37.775, lng: -122.434 },
        mapTypeId: 'roadmap'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function getPoints() {
    data = [];
    JSONObjects = JSON.parse(Get(window.location.href + 'reports/reports/'));
    for (index = 0; index < JSONObjects.length; index++) {
        data.push(new google.maps.LatLng(JSONObjects[index].latitude, JSONObjects[index].longitude))
    }

    return data;
}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
