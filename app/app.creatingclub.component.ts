import { Component, Inject } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
import { Location }    from '@angular/common';

import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'creating-club-app',
  template: `
    <md-card class="demo-card demo-basic">
      <md-card-content>
        <div>
          Creating club
        </div>
        <form>
          <md-input  placeholder="Name of club" [(ngModel)]="club.name" 
                [ngModelOptions]="{standalone: true}" style="width: 100%" ></md-input>
          <md-input  placeholder="About" [(ngModel)]="club.about"
                [ngModelOptions]="{standalone: true}"  style="width:  100%"></md-input>
          <md-input  placeholder="Image" [(ngModel)]="club.image" 
                [ngModelOptions]="{standalone: true}" style="width:  100%"></md-input>
          <div>
             <input id="upload" type="file" name="upload" (change)="getName(this.files)"/>
          </div>
        </form>
        
      </md-card-content>
      <md-card-actions> 
        <button md-button (click)="createClub()">Create</button>
      </md-card-actions>
    </md-card>
  `
})
export class CreatingClubComponent {
  club: Club;
  filename: any;
  image: string;
  constructor(private clubService: ClubService, private location: Location, 
              @Inject(FirebaseApp) firebaseApp: any){
    this.club = new Club('','','');

    // const storageRef = 
    // storageRef.getDownloadURL().then(url => this.image = url);

        // Create a root reference
    var storageRef = firebaseApp.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('mountains.jpg');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name            // true
    mountainsRef.fullPath === mountainImagesRef.fullPath    // false
  }
  createClub(){
    console.log(this.club.name+" "+this.club.about+" "+this.club.image);
    this.clubService.createClub(this.club.name,this.club.about,this.club.image);
    this.location.back();
  }
  getName (str){
    console.log()

  }
  onChange(event) {
    console.log('ngModelChange do');
    var files = event.srcElement.files;
    console.log(files);
  }
}

