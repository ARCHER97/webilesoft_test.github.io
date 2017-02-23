import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ClubService } from './club.service';
import { Club } from './club';

@Component({
  selector: 'about-app',
  template: `
    <div *ngIf="club">
      <h2>{{club.name}}</h2>
      <div><label>about: </label>{{club.about}}</div>
      <div><label>image: </label>{{club.image}}</div>
    </div>
    <button (click)="goBack()">Back</button>
  `
})
export class AboutComponent implements OnInit{
  club: Club;
  constructor( 
    private clubService: ClubService,
    private route: ActivatedRoute,
    private location: Location
  ){}
  ngOnInit(): void {
     this.club = this.clubService.getClub(this.route.snapshot.params['name']);
  }
  goBack(): void {
    this.location.back();
  }
}

