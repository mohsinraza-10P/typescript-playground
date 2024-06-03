import { faker } from '@faker-js/faker';
import { Mappable } from './custom-map';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
      <h3>${this.companyName}</h3>
      <p>${this.catchPhrase}</p>
      </div>
    `;
  }
}
