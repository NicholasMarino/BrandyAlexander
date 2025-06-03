export interface Address {
  name: string,
  line1: string,
  line2: string | undefined,
  city: string,
  state: string,
  zip: string,
  googleMapsLink: string,
}

export interface Showrun {
  title: string,
  address: Address,
  image: string | undefined,
  ticketLink: string | undefined,
  showtimes: Showtime[],
  description: string,
}

export interface Showtime {
  date: Date,
  time: string,
  featuring: string | undefined,
}
