import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a routerLink="/clubs">Clabs</a></li>
          <li><a routerLink="/creatingclub">Creating club</a></li>
        </ul>
      </div>
    </nav>
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
      <router-outlet></router-outlet>
    </div>
    <div class="col-sm-1"></div>
  `
})
export class AppComponent {}

