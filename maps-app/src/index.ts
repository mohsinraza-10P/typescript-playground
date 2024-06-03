// { } to be used in import when export is not default
import { User } from './models/user';
import { Company } from './models/company';
import { CustomMap } from './models/custom-map';

const user = new User();
const company = new Company();

const map = new CustomMap('map-container');
map.addMarker(user);
map.addMarker(company);
