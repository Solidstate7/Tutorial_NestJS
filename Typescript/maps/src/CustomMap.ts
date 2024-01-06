import { User } from './User';
import { Company } from './Company';

// instructions to every other class
// on how they can be an argument to 'addMarker' -> inversion of dependency
// It is not CustomMap that needs to accommodate multiple arguments but it's argruments that needs to satisfy interfaces
// Requirements are abstracted away as interfaces, thereby scalable.

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  color: string;

  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new window.google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 18,
        center: {
          lat: 37.539572,
          lng: 127.123741,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
