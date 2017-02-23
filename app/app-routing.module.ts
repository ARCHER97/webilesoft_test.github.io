import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { ClubsComponent } from './app.clubs.component';
import { AboutComponent } from './app.about.component';
import { CreatingClubComponent } from './app.creatingclub.component';

const routes: Routes = [
  { path: '', redirectTo: '/clubs', pathMatch: 'full' },
  { path: 'clubs', component: ClubsComponent },
  { path: 'creatingclub', component: CreatingClubComponent },
  { path: 'about/:name', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}