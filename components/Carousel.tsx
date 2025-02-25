import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';
import { TouristSpotCard } from './Cards';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.9;
const CARD_OFFSET = (SCREEN_WIDTH - CARD_WIDTH) / 1;

type CarouselItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  imageSource: any;
};

export function CustomCarousel({ items }: { items: CarouselItem[] }) {
  return (
    <Carousel
      loop={true}
      width={CARD_WIDTH}
      height={CARD_WIDTH * 1.25}
      style={{ width: SCREEN_WIDTH }}
      data={items}
      defaultIndex={0}
      scrollAnimationDuration={500}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      renderItem={({ item }) => (
        <TouristSpotCard
          imageSource={item.imageSource}
          title={item.title}
          location={item.location}
          description={item.description}
          style={{
            width: CARD_WIDTH - 20,
            marginHorizontal: CARD_OFFSET,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        />
      )}
    />
  );
}
