
let Coords = {lat: -38.558149 , lng: -58.6694818};
        let map;
        let marker;
        let mapDiv = document.getElementById('map')
        
        function initMap(){
           
             map = new google.maps.Map(mapDiv,{
                zoom:15,
                center: Coords,
            });
        
        marker = new google.maps.Marker ({
                position: Coords,
                mar: map,
            });
        }
