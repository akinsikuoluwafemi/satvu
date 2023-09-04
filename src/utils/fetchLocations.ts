import { BASE_URL } from './constants';

export const fetchLocations = async (value: string) => {
  try {
    const data = await fetch(`${BASE_URL}/search?q=${value}&format=jsonv2`);
    const locations = await data.json();
    return locations;
  } catch (err: unknown) {
    console.error(err);
  }
};
