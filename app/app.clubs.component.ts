import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from './club';
import { ClubService } from './club.service';

@Component({
  selector: 'clubs-app',
  template: `
  <!--angular2-material card and button-->
    <div class="clubs">
      <div *ngFor="let club of allClubs" (click)="gotoDetail(club)" style="margin-top: 5px">
        <md-card>
          <md-card-title-group>
              <img md-card-sm-image src={{club.image}}>
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
  constructor(
    private clubService: ClubService, 
    private router: Router
  ){}
  getClubs(): void {
    this.allClubs = new Array;
    this.clubService.getClubs()
      .subscribe(clubs => {
          clubs.forEach(element=>{
            this.allClubs.push(new Club(element.$key,element.about,element.image));
          })
      });
  }
  ngOnInit(): void {
    this.getClubs();
  }
  gotoDetail(club: Club): void {
    this.router.navigate(['/about', club.name]);
  }
}

