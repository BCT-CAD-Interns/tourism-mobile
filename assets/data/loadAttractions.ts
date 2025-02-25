import attractionsData from '~/assets/data/attractions.json';
import Pin from '~/assets/images/Maps/location pin-1.svg';

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  location: string;
  imageSource: any;
}

const imageMap: Record<string, any> = {
  'agusan-river.jpg': require('~/assets/images/attractions/agusan-river.jpg'),
  'butuan-boat.jpg': require('~/assets/images/attractions/butuan-boat.jpg'),
  'balanghai.jpg': require('~/assets/images/attractions/Balangay_Voyage_1.jpg'),
  'magellan.jpg': require('~/assets/images/attractions/magellan.jpg'),
  'libertad-museum.jpeg': require('~/assets/images/attractions/libertad-museum.jpeg'),
  'bud.webp': require('~/assets/images/attractions/bud.webp'),
  'banza-church.jpg': require('~/assets/images/attractions/banza-church-ruins.jpg'),
  'national-museum.jpg': require('~/assets/images/attractions/national-museum.jpg'),
  'masawa-hong.jpg': require('~/assets/images/attractions/masawa-hong.jpg'),
  'guingona-park.jpg': require('~/assets/images/attractions/guingona-park.jpg'),
};

export const loadAttractions = (): CarouselItem[] => {
  return attractionsData.map((attraction) => ({
    id: attraction.id,
    title: attraction.name,
    description: attraction.description,
    location: attraction.location,
    imageSource: imageMap[attraction.images],
  }));
};
