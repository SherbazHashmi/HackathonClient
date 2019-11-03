import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';


@inject(GISService, Router)
export class Landing {
  selectedCommunity = null;
  constructor(GISService, Router) {
    this.router = Router;
    this.gisService = GISService;
    this.message = "123";
    this.communities = [];
    console.log(this.message)
  }

  attached() {
    this.gisService.getData("community").then((communities) => {
      //this.communities = communities.Community;
      //console.log(communities.Community)
      this.communities = [{ 
        name:  "Awabakal, Worimi"
      }];
    }, reason => {
      console.log(reason);
    });
  }

  navigatePlants() {
    this.router.navigate('plant/edible')
  }

  navigateGeneral() {
    this.router.navigate('area')
  }

  
}
