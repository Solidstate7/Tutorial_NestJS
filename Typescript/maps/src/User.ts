import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  color: string = 'red';
  location: {
    lat: number;
    lng: number;
  };

  constructor(lat: number, lng: number) {
    this.name = 'Eunjae';
    this.location = {
      lat: lat,
      lng: lng,
    };
  }

  markerContent(): string {
    return `My name is, ${this.name}`;
  }
}
