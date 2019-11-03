import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';

@inject(GISService)
export class PlantDescribe {
  targetedPlant = null;
  constructor(GISService) {
    this.gisService = GISService;
    this.message = "123"
    this.plants = [];
    console.log(this.message)
  }

  attached() {
    this.gisService.getData("plants").then((plants) => {
      this.plants = plants.Plants;
      console.log(plants.Plants)
    }, reason => {
      console.log(reason);
    });
  }

  
}
