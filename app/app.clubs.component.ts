import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from './club';
import { ClubService } from './club.service';

@Component({
  selector: 'clubs-app',
  template: `
    <ul class="clubs">
      <li *ngFor="let club of clubs" (click)="gotoDetail(club)">
        <span class="badge">{{club.name}}</span> {{club.image}}
      </li>
    </ul>
  `,
  providers: [ClubService]
})
export class ClubsComponent implements OnInit{
  clubs: Club[];
  constructor(
    private clubService: ClubService,
    private router: Router
  ){}
  getHeroes(): void {
    this.clubs = this.clubService.getClubs();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(club: Club): void {
    this.router.navigate(['/about', club.name]);
  }
}

