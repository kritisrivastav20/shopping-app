import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: 'menu-tab.page.html',
  styleUrls: ['menu-tab.page.scss']
})
export class MenuTabPage {

  selector: any;
  public images = [
    {
      product: "assets/images/dd.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/cc.jpg",
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
  ]

  constructor() {
    this.selector = "Current"
  }

}
