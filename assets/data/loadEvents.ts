import eventsData from '~/assets/data/events.json';

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSource: any;
  detailsUrl: string;
}

const imageMap: Record<string, any> = {
  'mutya.jpg': require('~/assets/images/events/mutya.jpg'),
  'arts.jpg': require('~/assets/images/events/arts.jpg'),
  'avp.jpg': require('~/assets/images/events/avp.jpg'),
  'photo.jpg': require('~/assets/images/events/photo.jpg'),
  'download.jpg': require('~/assets/images/events/download.jpg'),
};

export const loadEvents = (): EventItem[] => {
  return eventsData[0].updates_and_events.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    description: event.description,
    imageSource:
      imageMap[event.image_url] ?? require('~/assets/images/attractions/Balangay_Voyage_1.jpg'),
    detailsUrl: event.details_url,
  }));
};
