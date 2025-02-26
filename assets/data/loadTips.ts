import traveltipsData from '~/assets/data/traveltips.json';

export interface TravelItems{
    id: string;
    title: string;
    description: string;
    imageSource: any;
}

const imageMap: Record<string, any> = {
    'best-time-to-travel.jpg' : require ('~/assets/images/traveltips/best-time-to-travel.jpg'),
    'getting-around.jpg': require ('~/assets/images/traveltips/getting-around.jpg'),
    'what-to-wear.jpg': require ('~/assets/images/traveltips/what-to-wear.jpg'),
    'currency.jpg': require ('~/assets/images/traveltips/currency.jpg'),
    'food.jpeg': require ('~/assets/images/traveltips/food.jpeg'),
    'etiquette.jpeg': require ('~/assets/images/traveltips/etiquette.jpeg'),
    'safety.jpg': require ('~/assets/images/traveltips/safety.jpg'),
    'respect-nature.jpg': require ('~/assets/images/traveltips/respect-nature.jpg'),
    'language.jpg': require ('~/assets/images/traveltips/language.jpg'),
    'itinerary.png': require ('~/assets/images/traveltips/itinerary.png'),
};

export const loadTips = (): TravelItems[] => {
    return traveltipsData.map((traveltips) =>({
        id: traveltips.id,
        title: traveltips.title,
        description: traveltips.description,
        imageSource: imageMap[traveltips.images],
    }));
};

