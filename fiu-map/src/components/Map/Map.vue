<template>
  <div id="#app">
    <MglMap id="map-container" 
        :accessToken="scene.accessToken" 
        :mapStyle.sync="scene.mapStyle"
        @load="onMapLoaded"
        :zoom="scene.zoom"
        :pitch="pitch"
        :center="scene.coordinates"
    >
      <MglMarker :coordinates="coordinates" color="blue" />
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglPopup :coordinates="popupCoordinates">
        <span>Hello world!</span>
      </MglPopup>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { 
    MglMap, 
    MglNavigationControl, 
    MglGeolocateControl, 
    MglPopup,
    MglMarker 
} from "vue-mapbox";

export default {
    name: 'App',
    components: {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglPopup,
        MglMarker
    },
    data () {
        return {
            scene: {
              accessToken: 'pk.eyJ1Ijoic3ctMjAxOSIsImEiOiJjazB1Mm1iNnQwanZ0M2NwZGdsNnpocmZkIn0.JODibKZFgAKA3cDqfbPraw',
              mapStyle: 'mapbox://styles/mapbox/streets-v11',
              zoom: 15.3,
              pitch: 0,
              navigationControl: true,
              coordinates: [-80.37635, 25.756]
            }
        }
    },
    props: {
      accessToken: {
        type: String,
        required: false,
        default: ''
      },
      mapStyle: {
        type: [String, Object],
        default: 'mapbox://styles/mapbox/streets-v11'
      },
      attributionControl: {
        type: Boolean,
        default: true
      },
      navigationControl: {
        type: Boolean,
        default: true
      },
      zoom: {
        type: [Number, String],
        default: 15.3
      },
      pitch: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
        popupCoordinates() {
        return [10, 10]
        }
    },
    created() {
        this.mapbox = Mapbox;
    },
    methods: {
        onMapLoaded(event) {
            this.map = event.map;
            this.$store.map = event.map;
            
            
        }
    }
};
</script>

<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css");
#map-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0px 0px;
}
</style>