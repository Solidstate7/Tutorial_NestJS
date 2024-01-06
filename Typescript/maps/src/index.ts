// import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: `${process.env.PARCEL_GOOGLE_API_KEY}`,
  version: 'weekly',
  // ...additionalOptions,
});

loader.load().then(async () => {
  const user = new User(37.54075642981247, 127.12375866195059);
  const company = new Company(37.5517045, 127.1342082);
  const customMap = new CustomMap('map');

  customMap.addMarker(user);
  customMap.addMarker(company);
});

// new CustomMap('map');
