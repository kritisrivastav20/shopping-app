import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {

  public posts = [
    {
      name: 'Albert John',
      profileImg: 'assets/images/avatar1.png',
      postImg: 'assets/images/post-img/fash1.jpg',
      isFollow: true,
      isLiked: true,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k'
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
      totalLikes: '2.7k'
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
      totalLikes: '2.7k'
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
      totalLikes: '2.7k'
    }
  ];

  constructor() { }

}
