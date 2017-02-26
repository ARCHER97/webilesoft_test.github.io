import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from './club';
import { ImageAndName } from './imageAndName';
import { ClubService } from './club.service';
import { FirebaseApp, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'clubs-app',
  template: `
    <div class="clubs">
      <div *ngFor="let club of allClubs" (click)="gotoDetail(club)" style="margin-top: 5px">
        <md-card>
          <md-card-title-group>
              <img md-card-sm-image [src]="club.image">
              <md-card-title>{{club.name}}</md-card-title>
          </md-card-title-group>
        </md-card>
      </div>
    </div>
  `,
  providers: [ClubService]
})
export class ClubsComponent implements OnInit{
  allClubs: Array<Club>;
  firebaseApp: any;

  constructor(
    private clubService: ClubService, 
    private router: Router,
    @Inject(FirebaseApp) firebaseApp: any
  ){
    this.firebaseApp = firebaseApp;
  }

  getClubs(): void {
    this.clubService.getClubs()
      .subscribe(clubs => {
          this.allClubs = new Array;
          clubs.forEach(element=>{
            this.allClubs.push(new Club(element.$key,element.about));
          })
          this.allClubs.forEach(club=>{
            this.getImageByName(club.name);
          })
      });
  }
  ngOnInit(): void {
    this.getClubs();
  }
  
  gotoDetail(club: Club): void {
    this.router.navigate(['/about', club.name]);
  }
  getImageByName(name: string){
    const storageRef = this.firebaseApp.storage().ref().child('images/'+name+'.jpg');
    storageRef.getDownloadURL().then(url => {
      this.allClubs.forEach(element=>{
            if(element.name===name)element.image = url;
      })
    });
  }
}
