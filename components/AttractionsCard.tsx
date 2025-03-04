import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle, Pressable } from 'react-native';
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
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View className="h-28 w-full flex-row gap-2 rounded-xl bg-white px-1  shadow-md" style={style}>
      <View className="w-5/6 flex-row gap-2 py-2">
        {/* Top Image */}
        <Image source={imageSource} className=" h-24 w-28 self-center rounded-xl object-cover" />

        {/* Card Body */}
        <View className="">
          {/* Location */}

          {/* Title */}
          <Text
            className=" font-gotham-black text-md mt-1 w-full   "
            ellipsizeMode="tail"
            numberOfLines={1}>
            {title.length > 15 ? title.slice(0, 18) + '...' : title}
          </Text>
          <View className=" flex-row items-center  ">
            <Pin className="h-8 w-8" fill={'#000'} />
            <Text className=" text-sm text-gray-500" ellipsizeMode="tail" numberOfLines={1}>
              {location.length > 17 ? location.slice(0, 20) + '...' : location}
            </Text>
          </View>
          {/* Description */}
          <Text className="mt-1 text-xs text-gray-600 " ellipsizeMode="tail" numberOfLines={1}>
            {description.length > 15 ? description.slice(0, 32) + '...' : description}
          </Text>
        </View>
      </View>
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        className={`bg-greenApple w-1/6 items-center justify-center rounded-r-xl ${
          isPressed ? 'bg-purpleHeart' : 'bg-greenApple'
        }`}>
        <Text
          className={`text-md text-center font-poppins ${isPressed ? 'text-white' : 'text-white'}`}>
          See More
        </Text>
      </Pressable>
    </View>
  );
}
