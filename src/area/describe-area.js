import $ from 'jquery';

export class DescribeArea {
  constructor() {
    this.message = 'Hello world';
  }

  attached() {
    let scriptURL = 'https://js.arcgis.com/4.13/';

    let scriptElement = document.createElement('script');

    scriptElement.src = scriptURL;

    scriptElement.onload = () => {
      console.log("LOADED")
      $('head').append(`
    
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
            id: "f2e9b762544945f390ca4ac3671cfa72"
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
    `)
    }
    console.log('hi')
    
  }
}
