import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import EventCard from './EventCard';
import { loadEvents } from '~/assets/data/loadEvents';
import { router } from 'expo-router';
import Football from '~/assets/images/UI/American Football.svg';
export default function Events() {
  const events = loadEvents();

  return (
    <View className="my-48 px-4">
      <View className="mt-5 flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <Football fill={'#000'} className="h-6 w-6" />
          <Text className="font-poppins text-lg font-bold text-gray-800">Latest Updates</Text>
        </View>
        <Pressable onPress={() => router.push('/events')}>
          <Text className="text-md font-poppins font-bold text-navy_blue">View All</Text>
        </Pressable>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} className="mt-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            imageSource={event.imageSource}
            title={event.title}
            date={event.date}
            description={event.description}
            style={{}}
            onPress={() => console.log('Navigate to', event.detailsUrl)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
