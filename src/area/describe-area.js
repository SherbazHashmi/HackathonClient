import $ from 'jquery';

export class DescribeArea {
  constructor() {
    this.currentMapName = "Basemap"
    this.currentDescription = "The basemap shows the boundaries within the area relative to the rest of Australia. "
       // Parks with Native Title
    // Edible Heat Map
    // Vegetation Map 
    // Basemap 
    
    this.maps = [
      { 
        name : "Basemap",
        id: "",
        description: "The basemap shows the boundaries within the area relative to the rest of Australia."
      },
      {
        name : "Edible Heat Map",
        id: "c530e2143df04cbdaf8a70e93d3b3118",
        description: "This map shows the distribution and density of the edible species species of plants within the region of New South Wales. As is evident from the map."
      },
      {
        name : "Vegetation Map",
        id: "e9991cfbcdbf4394806e60994bb390f9"
      },
      {
        name : "Parks with Native Title",
        id: "693af5d5baec4ee98e17c4993b9e7da5"
      },
    ]
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

            window.mapids = [
              "",
              "c530e2143df04cbdaf8a70e93d3b3118",
              "e9991cfbcdbf4394806e60994bb390f9",
              "693af5d5baec4ee98e17c4993b9e7da5"
            ]

            window.webmaps = window.mapids.map(function(webmapid) {
              return new WebMap({
                portalItem: {
                  // autocasts as new PortalItem()
                  id: webmapid
                }
              });
            });

            /************************************************************
             * Set the WebMap instance to the map property in a MapView.
             ************************************************************/
            window.view = new MapView({
              map: window.webmaps[0],
              container: "map_view"
            });
          });
        </script>
        `
    )
    }    
  }

  triggerMapSwitch(element) {
    // Parks with Native Title
    // Edible Heat Map
    // Vegetation Map 
    // Basemap 
    console
    const index = parseInt(element['id']) - 1;
    console.log(index);
    const mapID = this.maps[index].id;
    console.log(mapID);
    window.view.map = webmaps[index];
    this.currentMapName = this.maps[index].name;
    this.currentDescription = this.maps[index].description;
  }
}
