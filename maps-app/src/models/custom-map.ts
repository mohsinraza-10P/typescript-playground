// Instructions to every other class
// on how they can be an argument to 'addMarker'
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

  constructor(elementId: string) {
    this.initMap(elementId);
  }

  public addMarker(item: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  private initMap(elementId: string): void {
    const element = document.getElementById(elementId) as HTMLElement;
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
