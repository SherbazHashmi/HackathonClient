import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';

@inject(GISService)
export class Landing {
  constructor(GISService) {
    this.gisService = GISService;
    this.message = "123"
    console.log(this.message)
  }

  async attached() {
    const communities = await this.gisService.getData("community");
    this.message = communities.Community[0].name
    console.log(communities)
  }

  
}
