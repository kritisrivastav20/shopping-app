import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-tab',
  templateUrl: 'collections-tab.page.html',
  styleUrls: ['collections-tab.page.scss']
})
export class CollectionsTabPage {
  selector: any = [];

  constructor() {
    this.selector = "Current";
  }

}
