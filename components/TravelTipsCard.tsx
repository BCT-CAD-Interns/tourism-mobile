import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface TravelTipCardProps {
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

const TravelTipsCard: React.FC<TravelTipCardProps> = ({
  title,
  description,
  imageSource,
  onPress
}) => {
  return (
    <TouchableOpacity 
      className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View className="flex-row items-center p-4">
        <View className="w-16 h-16 rounded-lg overflow-hidden mr-3 bg-gray-100 items-center justify-center">
          <Image 
            source={imageSource} 
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">{title}</Text>
          <Text className="text-gray-600 mt-1 text-sm text-justify">{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TravelTipsCard;