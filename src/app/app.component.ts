import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
@Component({
  selector: 'app-root',
  template:`
    <div>{{title}}</div>
    <div>rendered</div>
    <a routerLink="/">home</a> <br>
    <a routerLink="/lazy">lazy loading</a>
    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [RouterOutlet, RouterLink],
  standalone: true
})
export class AppComponent {
  title = 'angular-v15';
}
export const AppRoutes: Routes = [
  {path: 'lazy', loadChildren: () => import('./pages/home/home.component').then(x => x.HomeRoutes)}
];
