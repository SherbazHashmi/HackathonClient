import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as toastr from 'toastr';

@inject(EventAggregator)
export class App {
  constructor(EventAggregator) {
    this.ea = EventAggregator;
    }

  configureRouter(config, router) {
    config.title = 'The Triton Project';
    config.map([
      {route: ['home', ''], name: 'Home', moduleId: PLATFORM.moduleName('landing/landing'), title: 'Home'},
      {route: ['plant/describe'], name: 'decribe plant', moduleId: PLATFORM.moduleName('plant/plant-describe'), title: 'Plant'},
      {route: ['plant/edible'], name: 'decribe plant', moduleId: PLATFORM.moduleName('plant/edible-plants'), title: 'Edible Plant'},
      {route: ['area'], name: 'area information', moduleId: PLATFORM.moduleName('area/describe-area'), title: 'Area Information'},

    ]);
    this.router = router;
  }

  attached() {
    this.toastSubscription = this.ea.subscribe('toast', toast => {
      toastr[toast.type](toast.message);
    });   
  }

  detached() {
    this.toastSubscription.dispose();
  }
}
