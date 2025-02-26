import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import Pin from '~/assets/images/Maps/location pin-1.svg';

type AttractionsCardProps = {
  imageSource: any; // or ImageSourcePropType
  title: string;
  location: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export function AttractionsCard({
  imageSource,
  title,
  location,
  description,
  onPress,
  style,
}: AttractionsCardProps) {
  return (
    <View className="h-28 w-full flex-row gap-2 rounded-xl bg-white px-2  shadow-md" style={style}>
      <View className="w-5/6 flex-row gap-2 py-2">
        {/* Top Image */}
        <Image source={imageSource} className="h-20 w-28 self-center rounded-xl object-cover" />

        {/* Card Body */}
        <View className="">
          {/* Location */}

          {/* Title */}
          <Text
            className=" font-Poppins-Black text-md mt-1 w-full font-poppins text-navy_blue "
            ellipsizeMode="tail"
            numberOfLines={1}>
            {title.length > 15 ? title.slice(0, 20) + '...' : title}
          </Text>
          <View className=" flex-row items-center  ">
            <Pin className="h-8 w-8" fill={'#000'} />
            <Text className=" text-sm text-gray-500" ellipsizeMode="tail" numberOfLines={1}>
              {location.length > 15 ? location.slice(0, 20) + '...' : location}
            </Text>
          </View>
          {/* Description */}
          <Text className="mt-1 text-xs text-gray-600 " ellipsizeMode="tail" numberOfLines={2}>
            {description.length > 15 ? description.slice(0, 25) + '...' : description}
          </Text>
        </View>
      </View>
      <View className="w-1/6 items-center justify-center rounded-r-xl border-l bg-navy_blue">
        <TouchableOpacity onPress={onPress} className="h-10 w-16 items-center justify-center  ">
          <Text className="text-center text-xs font-semibold text-white">See More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
