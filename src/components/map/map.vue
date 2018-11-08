<template>
  <div id="mapbox"></div>
</template>

<script>
  import geocoding from '@mapbox/mapbox-sdk/services/geocoding'
  import { MAPBOX_API_TOKEN } from '../../consts/consts.js'

  export default {
    name: 'Map',
    props: {
      address: {
        type: String,
        default: '',
      }
    },
    data: () => {
      return {
        center: [139.7521, 35.6825],
        map: {},
        geocodingClient: {},
      }
    },
    computed: {
      adjustedQuery () {
        return this.address.substr(0, 19)
      }
    },
    methods: {
      initGeocodingClient () {
        this.geocodingClient = geocoding({
          accessToken: MAPBOX_API_TOKEN
        })
      },
      searchCoordinates () {
        this.geocodingClient.forwardGeocode({
          query: this.adjustedQuery,
        })
        .send()
        .then((res) => {
          let coordinates = res.body.features[0]
          this.center = coordinates ? coordinates.center : this.center
          this.renderMap()
        })
      },
      renderMap () {
        this.map = new mapboxgl.Map({
          container: 'mapbox',
          center: this.center,
          zoom: 13,
          style: 'mapbox://styles/mapbox/streets-v9'
        })
        this.renderMarker()
      },
      renderMarker () {
        const marker = new mapboxgl.Marker()
          .setLngLat(this.center)
          .addTo(this.map)
      }
    },
    mounted () {
      this.initGeocodingClient()
      if (this.adjustedQuery) {
        this.searchCoordinates()
      } else {
        this.renderMap()
      }
    }
  }
</script>
