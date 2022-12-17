import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
export const HomeRoutes: Routes = [{path: '', component: HomeComponent}];
