import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.selectedMusicItem = new Subject();
        this.musicItemSelected = this.selectedMusicItem.asObservable();
    }
    getMusicItems() {
        return this.http.get('https://localhost:44316/api/MusicItem');
    }
    postMusicItem(MusicItem) {
        return this.http.post('https://localhost:44316/api/MusicItem', MusicItem).subscribe(res => {
            console.log("post finished");
            //console.log(res);
        });
    }
    putMusicItem(MusicItem) {
        this.http.put(`https://localhost:44316/api/MusicItem/${MusicItem.id}`, MusicItem, MusicItem.id).subscribe(res => {
            console.log(res);
        });
    }
    selectMusicItem(musicItem) {
        this.selectedMusicItem.next(musicItem);
        console.log(musicItem);
    }
};
ApiService = tslib_1.__decorate([
    Injectable()
], ApiService);
export { ApiService };
//# sourceMappingURL=api.Service.js.map