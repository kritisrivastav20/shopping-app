import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { ProductslidesComponent } from '../productslides/productslides.component';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage implements OnInit {
  a: any;
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
  ShowProducts: any = [];
b: any;
  constructor(private modal: ModalController) {
   }
   ngOnInit(){
     this.ShowProducts.length = this.posts.length;
   }

  getShortName(fullName) { 
    return fullName.split(' ').slice(0, -1).join(' ');
  }
  OpenProducts(i){
  this.ShowProducts[i] = true;
  }
  HideProducts(i){
    this.ShowProducts[i] = false;
  }
  adjustElementOnScroll(ev) {
    this.a = document.getElementById("header");
          this.a.style.display = 'none'; 
          if(ev.detail.deltaY < 0){
            this.a.style.display = 'block'; 
          }
}

}
