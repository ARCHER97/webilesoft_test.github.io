import { Component } from '@angular/core';
import { Club } from './club';

@Component({
  selector: 'creating-club-app',
  template: `
    <h2>{{club.name}} details!</h2>
    <div>
      <label>name: </label>
      <input [(ngModel)]="club.name" placeholder="name">
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="club.about" placeholder="about">
    </div>
    <div>
      <label>image: </label>
      <input [(ngModel)]="club.image" placeholder="image">
    </div>
    <button (click)="createClub()">Create</button>
  `
})
export class CreatingClubComponent {
  club: Club = {
    name: '',
    about: '',
    image: ''
  };
  constructor(){ }
  createClub(){
    console.log(this.club.name+" "+this.club.about+" "+this.club.image);
  }
}

