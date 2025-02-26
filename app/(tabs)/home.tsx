import React from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from '~/components/Container';
import Compass from '~/assets/images/Maps/Vector.svg';
import { loadAttractions } from '~/assets/data/loadAttractions';
import { CustomCarousel } from '~/components/Carousel';
import Events from '~/components/Events';
import PressableText from '~/components/PressableText';

export default function Home() {
  const attractions = loadAttractions();

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative h-[500px]">
          <ImageBackground
            source={require('~/assets/images/attractions/festival.jpg')}
            className="h-full w-full"
            resizeMode="cover">
            <LinearGradient
              colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
              locations={[0.2, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              className="absolute inset-0 h-full justify-start bg-black/40 pt-10">
              <View className="gap-2 px-10 py-5">
                <View className="h-8 w-48 flex-row items-center justify-around gap-2 rounded-lg bg-navy_blue px-2">
                  <Compass fill="#fff" width={18} height={18} />
                  <Text className="text-md font-prompt font-bold text-white">
                    Hello, adventurer!
                  </Text>
                </View>
                <View className="justify-center gap-2">
                  <Text className="font-poppins text-5xl font-bold text-white">Welcome</Text>
                  <View className="flex-row gap-2">
                    <Text className="font-poppins text-6xl font-bold text-white">to</Text>
                    <Text className="font-poppins text-7xl font-bold text-yellow_orange">
                      Butuan
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Carousel Section */}
        <View className="absolute top-60 z-20 mt-4 ">
          <View className="flex-row justify-between px-6">
            <Text className="text-md w-2/3 font-poppins text-white">
              Explore these wonderful tourist spots!
            </Text>
            <PressableText href="/attractions">Test</PressableText>
          </View>
          <CustomCarousel items={attractions} />
        </View>
        {/* Events Section */}
        <View className="   bg-white" />
    
        <Events />
      </ScrollView>
    </Container>
  );
}
