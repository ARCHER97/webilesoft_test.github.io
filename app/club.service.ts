import { Injectable, Inject } from '@angular/core';
import { Club } from './club';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';

var root: any;
var clubs: Array<Club> = new Array;
var items
@Injectable()
export class ClubService{
  storage: any;

  constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any) { 
    this.storage = firebaseApp.storage();
  }

  getClubs(): FirebaseListObservable<any[]> {
    return this.af.database.list('/clubs');
  }

  getClub(name: string): Club {
    var club: Club;
    this.getClubs()
      .subscribe(clubs => {
          clubs.forEach(element=>{
            if(element.$key===name)club = new Club(element.$key, element.about);
          })
      });
    return club;
  }    

  createClub(name: string, about: string){
    const itemObservable = this.af.database.object('/clubs/'+name);
    var stringUpdate = {about: about};
    itemObservable.update(stringUpdate);
  }
}