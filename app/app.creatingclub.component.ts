import { Component } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
import { Location }    from '@angular/common';

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
  constructor(private clubService: ClubService, private location: Location){
    this.club = new Club('','','');
  }
  createClub(){
    console.log(this.club.name+" "+this.club.about+" "+this.club.image);
    this.clubService.createClub(this.club.name,this.club.about,this.club.image);
    this.location.back();
  }
}

