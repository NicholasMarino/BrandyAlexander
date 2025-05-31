import { Component } from '@angular/core';
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
export class CalendarComponent {

  BUGHOUSE_ADDRESS: Address = {
    name: 'Bughouse Theater',
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

  SHOWRUNS: Showrun[] = [
    {
      title: "Montly Show on 1st Wednesday",
      address: this.PLAYGROUND_THEATER_ADDRESS,
      image: undefined,
      ticketLink: '',
      showtimes: [
        { date: new Date(2026, 1, 1), time: '7pm' },
      ],
      description: "A monthly variety show, hosted by Brandy Alexander!",
    },
    {
      title: "Montly Show on last Wednesday",
      address: this.PLAYGROUND_THEATER_ADDRESS,
      image: undefined,
      ticketLink: 'here',
      showtimes: [
        { date: new Date(2026, 1, 1), time: '7pm' },
        { date: new Date(2026, 2, 1), time: '7pm' },
      ],
      description: "A monthly variety show, hosted by Brandy Alexander!",
    },
    {
      title: "One-Off",
      address: this.PLAYGROUND_THEATER_ADDRESS,
      image: undefined,
      ticketLink: '',
      showtimes: [
          { date: new Date(2024, 4, 5), time: '7pm' },
          { date: new Date(2025, 4, 5), time: '7pm' },
          { date: new Date(2025, 9, 5), time: '7pm' },
      ],
      description: "A monthly variety show, hosted by Brandy Alexander!",
    }
  ];
}
