import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  // All YouTube videos to be embedded on this page can be listed here. Note that these videos can be private/unlisted,
  // but they need to be "embeddable"
  YOUTUBE_VIDEO_IDS: string[] = [
    "l-ure21t-5s",
  ];

  YOUTUBE_VIDEO_LINKS: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.YOUTUBE_VIDEO_LINKS = this.YOUTUBE_VIDEO_IDS.map(youtubeVideoId => {
        let url = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?playsinline=1&amp;rel=0&amp;controls=0&amp;loop=1`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
}
