import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastMember, Social } from './../util/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

  CAST_MEMBERS: CastMember[] = [
    {
      name: "Chris Iannucci",
      description: "<p>TODO.</p><p><italic>Description</p>",
      image: "assets/images/chris_iannucci.jpg",
      socials: [
        {
          name: "@amuse_nuch",
          icon: "instagram",
          link: "https://www.instagram.com/amuse_nuch",
        },
      ],
    },
    {
      name: "Nicholas Marino",
      description: "<p>TODO.</p><p><italic>Description</p>",
      image: "assets/images/nicholas_marino.jpg",
      socials: [
        {
          name: "@nicholasbmarino",
          icon: "instagram",
          link: "https://www.instagram.com/nicholasbmarino",
        },
      ],
    },
  ];
}
