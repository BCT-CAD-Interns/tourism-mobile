import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';

type EventCardProps = {
  imageSource: any; // or ImageSourcePropType
  title: string;
  date: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function EventCard(props: EventCardProps) {
  return (
    <View
      className="mt-2 h-24 w-full flex-row gap-2 rounded-xl bg-white  p-2 shadow-md"
      style={props.style}>
      {/* Top Image */}

      <Image
        source={props.imageSource}
        className="h-16 w-16 self-center rounded-xl border border-gray-200"
      />

      {/* Card Body */}
      <View className=" w-full">
        {/* Location */}

        {/* Title */}
        <Text
          className="text-md  w-4/5 font-poppins text-navy_blue "
          ellipsizeMode="tail"
          numberOfLines={1}>
          {props.title}
        </Text>
        <Text className="text-xs text-gray-500">{props.date}</Text>

        {/* Description */}

        {/* Read More Button */}
        <TouchableOpacity onPress={props.onPress} className="mt-1 w-24 rounded-md bg-blue-500 p-2 ">
          <Text className="text-center text-xs font-semibold text-white">View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
