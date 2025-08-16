import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Address, Showrun, Showtime } from './../util/models';
import { LambdaService } from './../service/lambda.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    LambdaService,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent implements OnInit {

  // Some showruns will be really long, like 20 shows. It's kinda impractical to show that many here, so we'll truncate
  // down to the first N showtimes. Hopefully we'll have a ticket link that will display the rest of them.
  DISPLAY_N_SHOWTIMES_PER_SHOWRUN = 4;

  // Create very common venue addresses as constants so we can reuse them
  BUGHOUSE_ADDRESS: Address = {
    name: 'BugHOOOUSESE Theater',
    line1: "1910 W. Irving Park Rd",
    line2: undefined,
    city: "Chicago",
    state: "IL",
    zip: "60613",
    googleMapsLink: "https://maps.app.goo.gl/rbR8cCb4U8dHuHLq5",
  };

  PLAYGROUND_THEATER_ADDRESS: Address = {
    name: 'The Playground Theater',
    line1: "4416 N. Clark St",
    line2: undefined,
    city: "Chicago",
    state: "IL",
    zip: "60640",
    googleMapsLink: "https://maps.app.goo.gl/LVYPtQbgX4d6v7Jg9",
  };

  // All showruns can go here. No need to worry about "outdated info" here, because old showruns and showdates will be
  // filtered out by the logic in ngOnInit.
  // If a showrun "image" isn't provided, we'll generate one.
  // If a showrun "ticketLink" isn't provided, we'll display a note that tickets are coming soon
  UNFILTERED_SHOWRUNS: Showrun[] = [
    {
      title: "Brandy Alexander Presents The Premiere",
      address: this.PLAYGROUND_THEATER_ADDRESS,
      image: 'assets/images/shows/2025-05-21_playground.png',
      ticketLink: undefined,
      showtimes: [
        { date: new Date(2025, 4, 21), time: '7pm', featuring: undefined },
      ],
      description: "New space! New sketches! Same old Brandy bringing you one hell of a show!",
    },
    {
      title: "Brandy Alexander Presents A NEW SHOW",
      address: this.PLAYGROUND_THEATER_ADDRESS,
      image: undefined,
      ticketLink: undefined,
      showtimes: [
        { date: new Date(2025, 4, 21), time: '7pm', featuring: "Elaine Golden, Bobby Cohoat, Izzy Salhani, Safoia Javed, Michael Serio, Carly Oishi, Mitch Mead" },
        { date: new Date(2025, 5, 25), time: '7pm', featuring: "Elaine Golden, Bobby Cohoat, Izzy Salhani, Safoia Javed, Michael Serio, Carly Oishi, Mitch Mead" },
        { date: new Date(2025, 6, 30), time: '7pm', featuring: undefined },
        { date: new Date(2025, 7, 27), time: '7pm', featuring: undefined },
        { date: new Date(2025, 8, 24), time: '7pm', featuring: undefined },
        { date: new Date(2025, 9, 29), time: '7pm', featuring: undefined },
        { date: new Date(2025, 10, 26), time: '7pm', featuring: undefined },
        { date: new Date(2025, 11, 31), time: '7pm', featuring: undefined},
      ],
      description: "A monthly show at Chicago's newest comedy theater! Held on the last Wednesday of every month.",
    },
  ];

  // In the logic below, we'll populate this with all showruns and showdates that occur today or later (i.e. it will
  // exclude old showdates)
  FILTERED_SHOWRUNS: Showrun[] = [];

  ngOnInit() {
    let now = new Date();

    this.FILTERED_SHOWRUNS = this.UNFILTERED_SHOWRUNS
      .map(showrun => {
        let unfilteredShowtimes = showrun.showtimes;
        let filteredShowtimes = unfilteredShowtimes.filter(showtime => showtime.date >= now);
        return {
          ...showrun,
          showtimes: filteredShowtimes
        };
      })
      .filter(showrun => showrun.showtimes.length > 0);
  }
}
