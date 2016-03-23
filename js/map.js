function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 30.270986, lng: -97.742362},
          zoom: 15,
          disableDefaultUI:true,
          zoomControl:true,
          scrollwheel: false,
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000045"},{"lightness":17}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#000045"},{"lightness":20}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":25}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":25}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"saturation":0},{"color":"#4d88ea"},{"lightness":0}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000045"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000045"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000045"},{"lightness":17},{"weight":1.2}]}]
        });

      }