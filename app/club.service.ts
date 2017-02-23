import { Injectable } from '@angular/core';
import { Club, CLUBS } from './club';

@Injectable()
export class ClubService {
  getClubs(): Club[] {
    return CLUBS;
  }
  getClub(name: string): Club {
    var clubs: Club[] = this.getClubs();
    return clubs.find(club => club.name === name) 
  }
}