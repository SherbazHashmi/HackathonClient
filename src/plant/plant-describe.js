import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';

@inject(GISService)
export class PlantDescribe {
  constructor(GISService) {
    this.gisService = GISService;
    this.message = "123"
    console.log(this.message)
    this.targetedPlant = null;
  }

  attached() {
    this.gisService.getData("plants").then((plants) => {
      const recievedPlants = plants.Plants;
      this.targetedPlant = recievedPlants[0];
      window.plant = this.targetedPlant;
      console.log(this.targetedPlant);
    }, reason => {
      console.log(reason);
    });
  }

  
}
