import $ from 'jquery';
import {Router} from 'aurelia-router';


export class EdiblePlants {
  constructor() {
    this.message = 'Hello world';
  }

  
attached() {
  let scriptURL = 'https://js.arcgis.com/4.13/';

  let scriptElement = document.createElement('script');

  scriptElement.src = scriptURL;

  this.scriptElementInHead = document.querySelector('head').appendChild(scriptElement);

  scriptElement.onload = () => {
    console.log("LOADED")
    $('head').append(` 
    <meta charset="utf-8" />
  <meta
    name="viewport"
    content="initial-scale=1,maximum-scale=1,user-scalable=no"
  />
      <style>
        html,
        body,
        #viewDiv {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
        }
      </style>

      <link
        rel="stylesheet"
        href="https://js.arcgis.com/4.13/esri/themes/light/main.css"
      />

      <script>
        require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
          /************************************************************
           * Creates a new WebMap instance. A WebMap must reference
           * a PortalItem ID that represents a WebMap saved to
           * arcgis.com or an on-premise portal.
           *
           * To load a WebMap from an on-premise portal, set the portal
           * url with esriConfig.portalUrl.
           ************************************************************/
          var webmap = new WebMap({
            portalItem: {
              // autocasts as new PortalItem()
              id: "c530e2143df04cbdaf8a70e93d3b3118"
            }
          });

          /************************************************************
           * Set the WebMap instance to the map property in a MapView.
           ************************************************************/
          var view = new MapView({
            map: webmap,
            container: "viewDiv"
          });
        });
      </script>
      `
  )
  console.log("LOADED 2")
  }}    

  triggerPageSwitch(element) {
    // Parks with Native Title
    // Edible Heat Map
    // Vegetation Map 
    // Basemap 
    console
    const index = parseInt(element['id']) - 1;
    console.log(index);
    console.log("here");
    
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("scrolling");
  } else {
    console.log("not scrolling");
  }
}

