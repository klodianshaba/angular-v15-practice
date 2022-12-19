import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
@Component({
  selector: 'app-root',
  template:`
    <style>
      .background{
        width: 100%;
        height: 100%;
        position: fixed;
        object-fit: cover;
        z-index: 1 !important;
      }
      .app-container{
        z-index: 2 !important;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .app-container h1{
        text-align: center;
      }
    </style>
    <img class="background" src="../assets/abstract-blue-technology-background-with-hexagons-vector.jpg" alt="background picture">
    <div class="app-container">
      <app-nav-bar></app-nav-bar>
      <h1>Klodian Shaba</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  imports: [RouterOutlet, RouterLink, NavBarComponent],
  standalone: true
})
export class AppComponent {
  title = 'angular-v15';
}
export const AppRoutes: Routes = [
  {path: 'lazy', loadChildren: () => import('./pages/home/home.component').then(x => x.HomeRoutes)}
];
