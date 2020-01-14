import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.Service';

@Component
  ({
  template: '<MusicItem></MusicItem>',
  templateUrl: './Item.component.html'
  })
export class ItemComponent {

  MusicItem = {};
  MusicItems: any;
  msg = '';
  counter = 0;

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getMusicItems().subscribe(res => {
      this.MusicItems = res;
    });
    this.api.musicItemSelected.subscribe(MusicItem => this.MusicItem = MusicItem);
}

  post(MusicItem) {
    this.api.postMusicItem(MusicItem)/*.subscribe(res => {
      console.log(res);
        
      this.api.getMusicItems().subscribe(res => {
        this.MusicItems = res;
      });
    }
  ); */
  console.log("calling get");
  this.api.getMusicItems().subscribe(res => {
    this.MusicItems = res;});

    

    this.displayMessage('Saved ' + MusicItem.Title);
  }
  put(MusicItem) {
    this.api.putMusicItem(MusicItem);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }

}
