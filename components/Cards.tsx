import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import Pin from '~/assets/images/Maps/Vector.svg';

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
      <View className="py-2">
        {/* Location */}

        {/* Title */}
        <Text
          className=" font-gotham-black mt-1  text-2xl text-navy_blue "
          ellipsizeMode="tail"
          numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-1">
          <Pin className="h-10 w-10" stroke="#fff" />
          <Text
            className="font-gotham-book text-sm text-gray-500"
            ellipsizeMode="tail"
            numberOfLines={1}>
            {location}
          </Text>
        </View>
        {/* Description */}
        <Text
          className="mt-2 truncate font-poppins text-sm text-gray-600"
          ellipsizeMode="tail"
          numberOfLines={4}>
          {description}
        </Text>

        {/* Read More Button */}
        <TouchableOpacity
          onPress={onPress}
          className="bg-greenApple mt-4 w-1/3 self-end rounded-md p-2">
          <Text className="text-center text-sm font-semibold text-white">Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
