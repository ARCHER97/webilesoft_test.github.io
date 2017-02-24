import { Injectable } from '@angular/core';
import { Club, CLUBS } from './club';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

var root: any;
var clubs: Array<Club> = new Array;
var items
@Injectable()
export class ClubService{
  
  constructor(private af: AngularFire) { }

  reloadClubs(){
  }

  getClubs(): FirebaseListObservable<any[]> {
    return this.af.database.list('/clubs');
  }

  getClub(name: string): Club {
    var club: Club;
    this.getClubs()
      .subscribe(clubs => {
          clubs.forEach(element=>{
            if(element.$key===name)club = new Club(element.$key, element.about, element.image);
          })
      });
    return club;
  }
}