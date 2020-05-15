import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  public isPostImageUploaded = false;
  public hashTags: string[] = [];
  public hashInputValue = '';
  public captionInputValue = '';

  constructor(
    public modlaCtrl: ModalController,
    public navParams: NavParams,
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modlaCtrl.dismiss('');
  }

  hashtagCheck(event) {
    if (event.detail.inputType === 'insertText' && event.detail.data === ' ') {
      // console.log('hashInputValue: ', this.hashInputValue);
      this.hashTags.push(this.hashInputValue);
      this.hashInputValue = '';
    }
  }

  deleteHashTag(index: number) {
    // console.log('delete index: ', index);
    this.hashTags.splice(index, 1);
  }

  selectImage() {
    const options = {
      maximumImagesCount: 1,
      outputType: 1,
      width: 500,
      height: 500,
      quality: 75
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log('error in getting image: ', err);
    });
  }

  goToPublishPage() {
    if (this.isPostImageUploaded && this.captionInputValue !== '' && this.hashTags.length !== 0) {

    }
  }

}
