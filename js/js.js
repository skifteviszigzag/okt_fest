/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2thcnBla2FudGVyIiwiYSI6ImNrZnFrZWR2cjE1OXEyeW9lazVmZ2lidGgifQ.rHA3DQA4-1UVos68yT2JxA';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/skarpekanter/ckfqkpo5d0nfp19mwm3sl7abn', // style URL
center: [11.549, 48.131], // starting position [lng, lat]
zoom: 12, // starting zoom
pitch: 45,
bearing: -80,
});
    map.on('load', function () {
        map.loadImage(
            "/images/lillefest.png",
            function (error, image) {
                if (error) throw error;
                map.addImage('beer', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [11.549, 48.131]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'beer',
                        'icon-size': 0.30
                    }
                });
            }
        );
    });    

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&lang=de&appid=ada18415cf7868937be58121015ce9bc')

.then(response => response.json())
.then(data => {
    var nameValue = data['name']
    var tempValue = data['main']['temp'] + '°'
    var descValue = data['weather'][0]['description'];
    
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

})