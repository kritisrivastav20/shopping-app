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
      tag: "JasmineMaria",
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

  public posts = [
    {
      name: 'Valeria Lipovetsky',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      isFollow: true,
      isLiked: true,
      description: `Sneak a peek into the closet`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "Mac palette",
      posts: "$ 89"
    },
    {
      name: 'Liliana Ava',
      profileImg: 'assets/images/avatar2.png',
      postImg: 'assets/images/post-img/fash2.jpeg',
      isFollow: false,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "Mac palette",
      posts: "$ 89"
    },
    {
      name: 'Jessica Barbara',
      profileImg: 'assets/images/avatar3.png',
      postImg: 'assets/images/post-img/fash3.jpg',
      isFollow: true,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "Mac palette",
      posts: "$ 89"
    },
    {
      name: 'Jennifer Elizabeth',
      profileImg: 'assets/images/avatar4.png',
      postImg: 'assets/images/post-img/fash4.jpg',
      isFollow: false,
      isLiked: true,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "Mac palette",
      posts: "$ 89"
    }
  ];
  constructor() {
    this.selector = "Current";
  }

}
