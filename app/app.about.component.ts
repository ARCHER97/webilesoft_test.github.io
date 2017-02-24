import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ClubService } from './club.service';
import { Club } from './club';

@Component({
  selector: 'about-app',
  template: `
    <!--angular2-material card and button-->
    <div *ngIf="club" class="">
      <md-card>
        <md-card-header>
            <md-card-title>{{club.name}}</md-card-title>
        </md-card-header>
        <!--<img md-card-image src="path/to/img.png">-->
        <md-card-content>
            <pre>{{club.about}}</pre>
        </md-card-content>
      </md-card>
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
     this.club = this.clubService.getClub(this.route.snapshot.params['name'])
  }
  goBack(): void {
    this.location.back();
  }
}

