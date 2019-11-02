import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
@inject(EventAggregator)
export class GISService {
  constructor(EventAggregator) {
    this.client = new HttpClient();
    this.host = 'http://192.168.137.1:5000/'
  }

  getData (dataType) {
      console.log(`${this.host}${dataType}`)
      this.isRequesting = true;
      return this.client.fetch(`${this.host}data/${dataType}`, {
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
