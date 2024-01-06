import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(lat: number, lng: number) {
    this.companyName = 'Stacker-Labs';
    this.catchPhrase = 'Do or die';
    this.location = {
      lat: lat,
      lng: lng,
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>catchphrase: ${this.catchPhrase}</h3>
    </div>`;
  }
}
