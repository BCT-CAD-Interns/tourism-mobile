import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';

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
        <Text className="mt-1 font-poppins text-2xl  text-navy_blue ">{title}</Text>
        <Text className="text-sm text-gray-500">{location}</Text>

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
