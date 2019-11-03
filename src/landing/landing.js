import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';

@inject(GISService)
export class Landing {
  selectedCommunity = null;
  constructor(GISService) {
    this.gisService = GISService;
    this.message = "123"
    this.communities = [];
    console.log(this.message)
  }

  attached() {
    this.gisService.getData("community").then((communities) => {
      this.communities = communities.Community;
      console.log(communities.Community)
    }, reason => {
      console.log(reason);
    });
  }

  
}
