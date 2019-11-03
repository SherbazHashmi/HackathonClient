export class EdiblePlants {
  constructor() {
    this.message = 'Hello world';
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("scrolling");
  } else {
    console.log("not scrolling");
  }
}
