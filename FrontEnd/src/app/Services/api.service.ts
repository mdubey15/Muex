import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private selectedMusicItem = new Subject<any>();
  musicItemSelected = this.selectedMusicItem.asObservable();
 
  constructor(private http: HttpClient) {}

  getMusicItems() {
    return this.http.get('https://localhost:44316/api/MusicItem');
  }

   postMusicItem(MusicItem) {
    return this.http.post('https://localhost:44316/api/MusicItem', MusicItem).subscribe(res => {
      console.log("post finished")
      //console.log(res);
    })
  }

  putMusicItem(MusicItem) {
    this.http.put(`https://localhost:44316/api/MusicItem/${MusicItem.id}`, MusicItem, MusicItem.id).subscribe(res => {
      console.log(res);
    })
  }

  selectMusicItem(musicItem) {
    this.selectedMusicItem.next(musicItem);
    console.log(musicItem);
  }

}
