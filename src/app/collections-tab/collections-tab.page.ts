import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-tab',
  templateUrl: 'collections-tab.page.html',
  styleUrls: ['collections-tab.page.scss']
})
export class CollectionsTabPage {
  selector: any = [];

  sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 2,
    centeredSlides: false
  };
  public images = [
    {
      product: "assets/images/dd.jpg",
      tag: "Mac palette",
      posts: "$ 89"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "#JasmineMaria",
      posts: "$ 20"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "Skin products",
      posts: "$ 20"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "Bobbibrown",
      posts: "$ 46"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "Collection",
      posts: "$ 54"
    },
    {
      product: "assets/images/cc.jpg",
      tag: "JasmineMaria",
      posts: "$ 29"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "makeup",
      posts: "$ 35"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "bobbibrown",
      posts: "$ 15"
    },
  ]
  constructor() {
    this.selector = "Current";
  }

}
