import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Social } from './util/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  SOCIALS: Social[] = [
    {
      name: "@thebrandyalexandershow",
      icon: "facebook",
      link: "https://www.facebook.com/thebrandyalexandershow"
    },
    {
      name: "@thebrandyalexandershow",
      icon: "instagram",
      link: "https://www.instagram.com/thebrandyalexandershow"
    }
  ];

  copyrightYears: string;

  constructor() {
    let startYear = 2025;
    let currentYear = new Date().getFullYear();

    if (startYear == currentYear) {
      this.copyrightYears = "" + startYear;
    }
    else {
      this.copyrightYears = startYear + "-" + currentYear;
    }
  }
}
