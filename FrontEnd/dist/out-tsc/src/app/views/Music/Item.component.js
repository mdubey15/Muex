import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemComponent = class ItemComponent {
    constructor(api) {
        this.api = api;
        this.MusicItem = {};
        this.msg = '';
        this.counter = 0;
    }
    ngOnInit() {
        this.api.getMusicItems().subscribe(res => {
            this.MusicItems = res;
        });
        this.api.musicItemSelected.subscribe(MusicItem => this.MusicItem = MusicItem);
    }
    post(MusicItem) {
        this.api.postMusicItem(MusicItem); /*.subscribe(res => {
          console.log(res);
            
          this.api.getMusicItems().subscribe(res => {
            this.MusicItems = res;
          });
        }
      ); */
        console.log("calling get");
        this.api.getMusicItems().subscribe(res => {
            this.MusicItems = res;
        });
        this.displayMessage('Saved ' + MusicItem.Title);
    }
    put(MusicItem) {
        this.api.putMusicItem(MusicItem);
    }
    /** Display a message briefly, then remove it. */
    displayMessage(msg) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
};
ItemComponent = tslib_1.__decorate([
    Component({
        template: '<MusicItem></MusicItem>',
        templateUrl: './Item.component.html'
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=Item.component.js.map