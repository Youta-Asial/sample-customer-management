<template>
  <div id="mapbox"></div>
</template>

<script>
  import Mapbox from 'mapbox-gl';

  export default {
    name: 'Map',
    mounted () {
      const map = new mapboxgl.Map({
        container: 'mapbox',
        center: [-122.420679, 37.772537],
        style: 'mapbox://styles/mapbox/streets-v9'
      })
    }
  }
</script>
