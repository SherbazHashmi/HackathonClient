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
