import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
@inject(EventAggregator)
export class GISService {
  constructor(EventAggregator) {
    this.client = new HttpClient();
    this.host = 'http://127.0.0.1:5000/'
  }

  getFileType () {
      this.isRequesting = true;
      return this.client.fetch(`http://localhost:5000`, {
        method: 'get',
        headers: {
        }
      })
      .then(response => {
        this.isRequesting = false;
        return response.json();
      })
      .catch(err => {
        this.isRequesting = false;
      });

    }
} 
