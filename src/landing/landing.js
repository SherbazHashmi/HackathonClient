import { GISService } from "../services/gis-service";
import { inject } from 'aurelia-framework';

@inject(GISService)
export class Landing {
  constructor(GISService) {
    this.gisService = GISService;
    this.message = ""
    console.log(this.message)
  }

  async attached() {
    this.fileType = await this.gisService.getFileType();
    this.message = this.fileType.shapeType;
  }

  
}
