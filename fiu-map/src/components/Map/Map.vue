<template>
  <div id="#app">
  <v-icon id="zzzz" size=100 color="rgb(231,75,74)">add_circle</v-icon>
  <a id="zz" v-on:click="handleClick('test')">Click me!</a>
  <p id="zzz" v-show="1 === 1">hello</p>

    <MglMap id="map-container" 
        :accessToken="scene.accessToken" 
        :mapStyle.sync="scene.mapStyle"
        @load="onMapLoaded"
        :zoom="scene.zoom"
        :pitch="scene.pitch"
        :center="scene.coordinates"
        @zoomTo="scene.zoom"
    >
     <div id="markd">
      <MglMarker id="marker"
        v-for="p in scene.coordinatesList" 
        v-bind:coordinates="p.point"
        v-bind:key="p.id"
        v-bind:color="p.color"
        v-bind:size="p.size"
      >
         <MglPopup >
            <VCard>
                <p>Hello, I'm popup! My coordinates are {{ p.point }}</p>
            </VCard>
        </MglPopup>
      </MglMarker>
      </div>
    

      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />

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
    name: 'MapComponent',
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
              zoom: 15,
              pitch: 10,
              navigationControl: true,
              coordinates: [-80.37635, 25.756],
              coordinatesList: [
                {point: [-80.37615, 25.756], id: 1, color: '#aaaaaa', size: 'small'},
                {point: [-80.40, 25.76], id: 2, color: '#11abcd', size: 'large'},
                {point: [-80.38, 25.76], id: 3, color: '#cc9090', size: 'large'},
                {point: [-80.37, 25.73], id: 4, color: '#234afd', size: 'large'},
                {point: [-80.36, 25.72], id: 5, color: '#ee02d3', size: 'large'},
                {point: [-80.35, 25.71], id: 6, color: '#f9f9f9', size: 'large'}
              ]
            }
        }
    },
    const: {
          coordinatesList2: [
                {point: [-80.37615, 25.756], id: 1},
                {point: [-80.38, 25.76], id: 2},
                {point: [-80.6, 25.8], id: 3}
              ]
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
        default: 3
      },
      pitch: {
        type: [Number, String],
        default: 50
      }
    },
    created() {
        this.mapbox = Mapbox;
    },
    methods: {
        onMapLoaded(event) {
            this.map = event.map;
        },
        handleClick: function(value) {
            alert(value)
    }
    }
};
</script>

<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css");
#map-container {
    position: absolute;
    top: 0;
    left: 25%;
    height: 100%;
    width: 100%;
    padding: 0px 0px;
}
/*#zz {
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 1;
}
#zzz {
  position: relative;
  left: 30px;
  top: 30px;
  z-index: 1;
}*/
#zzzz {
  position: absolute;
  left: 94%;
  top: 85%;
  z-index: 1;
}
#mz {
    color: red;
}
#marker:hover {
    background-color: #000eee;
    color: #000eee;
}
#markd {
    width: 20px;
    border-radius: 100%;
}
</style>
