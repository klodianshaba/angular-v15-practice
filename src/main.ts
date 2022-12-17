import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent, AppRoutes} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {bootstrapApplication} from "@angular/platform-browser";
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes)
  ]
}).catch(err => console.error(err));
