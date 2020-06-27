import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss'],
})
export class HashtagsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {}

}
