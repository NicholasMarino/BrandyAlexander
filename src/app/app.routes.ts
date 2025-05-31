import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { CalendarComponent } from './calendar/calendar.component'
import { ContactComponent } from './contact/contact.component'
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
];
