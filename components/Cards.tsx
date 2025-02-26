import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import Pin from '~/assets/images/Maps/location pin-1.svg';

type TouristSpotCardProps = {
  imageSource: any; // or ImageSourcePropType
  title: string;
  location: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export function TouristSpotCard({
  imageSource,
  title,
  location,
  description,
  onPress,
  style,
}: TouristSpotCardProps) {
  return (
    <View className="w-96 rounded-xl bg-white p-4 shadow-md" style={style}>
      {/* Top Image */}
      <Image source={imageSource} className="h-56 w-full rounded-xl object-cover" />

      {/* Card Body */}
      <View className="p-4">
        {/* Location */}

        {/* Title */}
        <Text className="font-Poppins-Black mt-1 font-poppins  text-2xl text-navy_blue ">
          {title}
        </Text>
        <View className="flex-row items-center">
          <Pin className="h-8 w-8" fill={'#000'} />
          <Text className="text-sm text-gray-500" ellipsizeMode="tail" numberOfLines={1}>
            {location}
          </Text>
        </View>
        {/* Description */}
        <Text
          className="mt-2 truncate text-sm text-gray-600 "
          ellipsizeMode="tail"
          numberOfLines={2}>
          {description}
        </Text>

        {/* Read More Button */}
        <TouchableOpacity onPress={onPress} className="mt-4 w-full rounded-md bg-blue-500 p-2">
          <Text className="text-center text-sm font-semibold text-white">Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
