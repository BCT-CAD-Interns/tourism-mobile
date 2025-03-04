import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { loadAttractions } from '~/assets/data/loadAttractions';
import { Ionicons } from '@expo/vector-icons';
import { Container } from '~/components/Container';
import Pin from '~/assets/images/Maps/location pin-1.svg';
import { LinearGradient } from 'expo-linear-gradient';
import Compass from '~/assets/images/Maps/Vector.svg';

// Define some activity icons and their labels
const activities = [
  { id: '1', label: 'Take Pictures', icon: '📷' },
  { id: '2', label: 'Picnicking', icon: '🧺' },
  { id: '3', label: 'Birdwatching', icon: '🐦' },
  { id: '4', label: 'Nature Walks', icon: '🥾' },
];

export default function AttractionDetailsScreen() {
  // Get the attraction ID from the URL params
  const { id } = useLocalSearchParams();

  // Find the attraction data based on ID
  const attractions = loadAttractions();
  const attraction = attractions.find((item) => item.id === id);

  // Handle the case where attraction is not found
  if (!attraction) {
    return (
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg">Attraction not found</Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-4 rounded-lg bg-navy_blue px-4 py-2">
            <Text className="text-white">Go Back</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View className="relative h-[250px] w-full">
          <ImageBackground
            source={attraction.imageSource}
            className="h-full w-full"
            resizeMode="cover">
            <LinearGradient
              colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
              locations={[0.2, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              className="absolute inset-0 h-full justify-start bg-black/40 pt-10">
              <View className="gap-2 px-10 py-5"></View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Content Area */}
        <View className="px-4 py-6">
          {/* Title Section */}
          <Text className="font-poppins text-3xl font-bold text-navy_blue">{attraction.title}</Text>

          {/* Location */}
          <View className="mt-2 flex-row items-center">
            <Pin className="h-6 w-6" fill="#000" />
            <Text className="ml-1 text-gray-700">{attraction.location}</Text>
          </View>

          {/* Description */}
          <Text className="mt-4 text-base text-gray-600">{attraction.description}</Text>

          {/* Activities Section */}
          <View className="mt-8">
            <Text className="mb-4 font-semibold text-navy_blue">
              Things we can do in {attraction.title}
            </Text>

            <View className="flex-row justify-between">
              {activities.map((activity) => (
                <View key={activity.id} className="items-center">
                  <View className="h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Text className="text-2xl">{activity.icon}</Text>
                  </View>
                  <Text className="mt-2 text-center text-xs">{activity.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* More Images Section */}
          <View className="mt-8">
            <Text className="mb-4 font-semibold text-navy_blue">More Images</Text>
            <FlatList
              data={[
                { id: '1', image: attraction.imageSource },
                { id: '2', image: attraction.imageSource },
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.image}
                  className="mr-3 h-24 w-32 rounded-lg"
                  resizeMode="cover"
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
