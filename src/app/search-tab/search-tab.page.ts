import { Component } from '@angular/core';
@Component({
  selector: 'app-search-tab',
  templateUrl: 'search-tab.page.html',
  styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

  a: any;
  selector: any = [];
  viewsearches: any; showHashtags: any;
  public posts = [
    {
      name: 'Valeria Lipovetsky',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      path: '@Valpovetsky',
      isFollow: true,
      isLiked: true,
      description: `Sneak a peek into the closet`,
      images: ['assets/images/post.svg', 'assets/images/post-img/fash2.jpeg', 'assets/images/post-img/fash3.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'Liliana Ava',
      profileImg: 'assets/images/avatar2.png',
      postImg: 'assets/images/post-img/fash2.jpeg',
      path: '@Lilyava',
      isFollow: false,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
        images: ['assets/images/post.svg', 'assets/images/post-img/fash2.jpeg', 'assets/images/post-img/fash3.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'Jessica Barbara',
      profileImg: 'assets/images/avatar3.png',
      postImg: 'assets/images/post-img/fash3.jpg',
      path: '@Jessica',
      isFollow: true,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      images: ['assets/images/post.svg', 'assets/images/post-img/fash2.jpeg', 'assets/images/post-img/fash3.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k',
      
    },
    {
      name: 'Jennifer Elizabeth',
      profileImg: 'assets/images/avatar4.png',
      postImg: 'assets/images/post-img/fash4.jpg',
      path: '@Jennifer',
      isFollow: false,
      isLiked: true,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
        images: ['assets/images/post.svg', 'assets/images/post-img/fash2.jpeg', 'assets/images/post-img/fash3.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    }
  ];

  public images = [
    {
      product: ["assets/images/dd.jpg", "assets/images/bb.jpg"],
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: ["assets/images/cc.jpg", "assets/images/aa.jpg"],
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: ["assets/images/dd.jpg", "assets/images/bb.jpg"],
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: ["assets/images/cc.jpg", "assets/images/aa.jpg"],
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
  ]
  constructor() {
    this.selector = "Current";
  }

   adjustElementOnScroll(ev) {
    this.a = document.getElementById("searchheader");
          this.a.style.display = 'none'; 
          if(ev.detail.deltaY < 0){
            this.a.style.display = 'block'; 
          }
}
showSearch(){
this.viewsearches = true;
}
viewHashtags(){
  this.viewsearches = null;
  this.showHashtags = true;
}
}
