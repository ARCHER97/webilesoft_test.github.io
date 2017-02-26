import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FirebaseApp } from 'angularfire2';
import { ClubService } from './club.service';
import { Club } from './club';

@Component({
  selector: 'about-app',
  template: `
    <div *ngIf="club">
      <md-card>
        <md-card-header>
            <img md-card-avatar [src]="club.image">
            <md-card-title><h3>{{club.name}}</h3></md-card-title>
        </md-card-header>
        <md-card-content>
            <pre>{{club.about}}</pre>
        </md-card-content>
      </md-card>
      <md-card-actions>
        <button md-button (click)="goBack()">Back</button>
      </md-card-actions>
    </div>
  `
})
export class AboutComponent implements OnInit{
  club: Club;
  firebaseApp: any;
  constructor( 
    private clubService: ClubService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject(FirebaseApp) firebaseApp: any
  ){
    this.firebaseApp = firebaseApp;
  }
  ngOnInit(): void {
     this.club = this.clubService.getClub(this.route.snapshot.params['name']);
     this.getLogoClub(this.club.name);
  }
  goBack(): void {
    this.location.back();
  }
  getLogoClub(name: string){
    const storageRef = this.firebaseApp.storage().ref().child('images/'+name+'.jpg');
    storageRef.getDownloadURL().then(url => {
      this.club.image = url;
    });
  }
}

