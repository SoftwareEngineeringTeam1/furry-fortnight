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
      <MglMarker 
        id="marker"
        v-for="p in FilteredEventList" 
        v-bind:coordinates="p.Coordinates"
        v-bind:key="p.Id"
        v-bind:color="p.Color"
      >
        <MglPopup>
          <v-card>
            <v-list thwo-line>
              <v-list-item
                v-for="item in FilteredEventList"
                v-if="p.Location===item.Location"
                v-bind:key="item.Id"
                @click="popUpOpen(); viewEvent(item.Id)"
              >
                <v-list-item-content >
                  <v-list-item-title v-html="item.Name"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.Comment"></v-list-item-subtitle>
                  <v-dialog v-model="ViewEventDialog" persistent width="30%">
                    <ViewEvent/>
                  </v-dialog> 
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </MglPopup>
      </MglMarker>
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

// const PARTITION_1 = 1
// const PARTITION_2 = 3
// const PARTITION_3 = 6

import ViewEvent from "../../components/ViewEvent/ViewEvent.vue";
export default {
  name: "MapComponent",
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
        accessToken: "pk.eyJ1Ijoic3ctMjAxOSIsImEiOiJjazB1Mm1iNnQwanZ0M2NwZGdsNnpocmZkIn0.JODibKZFgAKA3cDqfbPraw",
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        zoom: 16,
        pitch: 10,
        navigationControl: true,
        // coordinates: [-80.37635, 25.756],
        coordinates: [-80.373832, 25.757106],
        // bounds: [[-80.383788, 25.760140], [-80.369750, 25.753520]]
      },
      selectedEvent: null,
      selectedID: 0
    }
  },
  computed: {
    ...mapGetters([
      "FilteredEventList",
      "ViewEventDialog",
      "Event"
    ]),
    ...mapActions([
      "changeViewEventDialog"
    ]),
  },
  props: {
    accessToken: {
      type: String,
      required: false,
      default: ''
    },
    mapStyle: {
      type: [String, Object],
      default: "mapbox://styles/mapbox/streets-v11"
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
    ...mapActions(["fetchEvent"]),
    popUpOpen() {
      this.changeViewEventDialog;
    },
    onMapLoaded(event) {
      this.map = event.map;
    },
    viewEvent(itemId) {
      this.selectedEvent = this.$store.getters.FilteredEventList;
      this.selectedID = itemId;
      this.selectedEvent = this.selectedEvent.filter(this.eventId);
      this.fetchEvent(this.selectedEvent[0]);
    },
    eventId(value) {
      return value.Id == this.selectedID;
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
#marker_div {
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
