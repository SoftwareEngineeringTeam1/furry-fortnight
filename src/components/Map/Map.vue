<template>
  <div id="#app">
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
      <MglMarker 
        id="marker"
        v-for="p in mData" 
        v-bind:coordinates="p.Coordinates"
        v-bind:key="p.Id"
        v-bind:color="p.Color"
      >
        <MglPopup>
          <VCard>
            <span
              id="p1"
              v-for="s in mData"
              v-bind:key="s.Id"
            >
              <p id="p1" v-if="p.Location===s.Location" @click="popUpOpen()">
                <strong>Session name:</strong> {{ s.Name }} <br>
                <strong>Comment:</strong> {{ s.Comment }} <br>
              </p>
              <v-dialog v-model="ViewEventDialog" persistent width="30%">
                <ViewEvent />
              </v-dialog>     
            </span>
          </VCard>
        </MglPopup>
      </MglMarker>
      </div>
      <MglNavigationControl position="bottom-left" />
      <MglGeolocateControl position="bottom-left" />
    </MglMap>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Mapbox from "mapbox-gl";
import { 
    MglMap, 
    MglNavigationControl, 
    MglGeolocateControl, 
    MglPopup,
    MglMarker
} from "vue-mapbox";

const PARTITION_1 = 1
const PARTITION_2 = 3
const PARTITION_3 = 6

import ViewEvent from "../../components/ViewEvent/ViewEvent.vue";
export default {
  name: 'MapComponent',
  components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl,
      MglPopup,
      MglMarker,
      ViewEvent
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
          bounds: [[-80.368179, 25.761100], [-80.383778, 25.752543]]
        }
      }
  },
  computed: {
    ...mapGetters([
      "FilteredEventList",
      "ViewEventDialog"
    ]),
    ...mapActions([
      "changeViewEventDialog",
    ]),
    mData() {
      return this.$store.getters.FilteredEventList;
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
      default: 3
    },
    pitch: {
      type: [Number, String],
      default: 50
    },
    maxBounds: {
      type: Array,
      default() {
        return undefined;
      }
    }
  },
  created() {
    this.mapbox = Mapbox;
    // this.colors();
  },
  methods: {
    popUpOpen() {
      this.changeViewEventDialog();
    },
    onMapLoaded(event) {
      this.map = event.map;
    }
    // colors() {
    //   for (var data = 0; data < this.mData.length; data++) {
    //     if (this.mData[data].count === PARTITION_1 ) {
    //       this.mData[data].color = '#009900'; //green
    //     } else if (PARTITION_1 < this.mData[data].count && this.mData[data].count <= PARTITION_2) {
    //       this.mData[data].color = '#FFFF00'; //yellow
    //     } else if (PARTITION_2 < this.mData[data].count && this.mData[data].count <= PARTITION_3) {
    //       this.mData[data].color = '#FF8000'; //orange
    //     } else {
    //       data.scene.coordinatesList[data].color = '#CC0000'; //red
    //     }
    //   }
    // }
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
#marker:hover {
    background-color: #000eee;
    color: #000eee;
}
#markd {
    width: 20px;
    border-radius: 100%;
}

#p1 {
  padding: 10px 0px 10px 0px;
}

#s1 {
  width: 400px;
}
</style>
