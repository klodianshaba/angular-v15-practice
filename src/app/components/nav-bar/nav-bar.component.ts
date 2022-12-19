import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <style>
      .nav-bar-container{
        height: 40px;
        width: 100%;
      }
      .nav-bar-container a{
        height: 100%;
        line-height: 40px;
        text-decoration: none;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(2px);
      }
      .nav-bar-container a:hover{
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(2px);
        color: white;
      }
    </style>
    <div class="nav-bar-container">
      <a routerLink="/">Home</a>
      <a routerLink="/lazy">About</a>
      <a routerLink="/lazy">Skills</a>
      <a routerLink="/lazy">Projects</a>
    </div>
  `,
  styles: []
})
export class NavBarComponent {

}
