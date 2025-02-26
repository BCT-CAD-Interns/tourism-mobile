import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { loadTips, TravelItems } from '~/assets/data/loadTips';
import TravelTipsCard from '~/components/TravelTipsCard';

const TravelTips = () => {
  const [tips, setTips] = useState<TravelItems[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const tipsData = loadTips();
      setTips(tipsData);
    } catch (error) {
      console.error('Failed to load tips:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTipPress = (tipId: string) => {
    console.log(`Tip pressed: ${tipId}`);
    // You can add navigation or modal display logic here
    // For example: navigation.navigate('TipDetail', { tipId });
  };


  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#1e3a8a" />
        <Text className="mt-2 text-gray-600">Loading travel tips...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="px-4 py-6">
          <Text className="mb-6 font-poppins text-4xl font-bold">Travel Tips</Text>
        </View>
        
        {/* Content */}
        <View className="p-1">
          {tips.map((tip) => (
            <TravelTipsCard
              key={tip.id}
              title={tip.title}
              description={tip.description}
              imageSource={tip.imageSource}
              onPress={() => handleTipPress(tip.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravelTips;