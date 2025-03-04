import { Container } from '~/components/Container';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Button } from '~/components/Button';
import { router } from 'expo-router';

export default function RootPage() {
  const image = require('~/assets/images/attractions/Balangay_Voyage_1.jpg');
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" className="flex-1 justify-center " />
      <View className="bg-deepCerulean/70 absolute inset-0 bottom-0 z-10 w-full items-center">
        <View className=" flex h-1/2 w-full flex-col items-center justify-center ">
          <Image
            source={require('~/assets/expo_starter/bct-logo.png')}
            className="h-40 w-40"
            resizeMode="contain"
          />
          {/* <Text className="font-gotham-bold text-5xl  text-white">Butuan</Text> */}
          <Text className="font-gotham-black text-5xl  text-white">Butuan</Text>
          {/* <Text className="font-gotham-book text-5xl  text-white">Butuan</Text> */}
          <Text className="text-center font-poppins text-lg font-semibold text-white">
            Home of the Balangays
          </Text>
        </View>
        <View className="flex h-1/2 w-full items-center justify-around">
          <Button
            title="Get Started"
            className="bg-vividSkyBlue w-5/6"
            onPress={() => router.push('/(tabs)/home')}
          />
        </View>
      </View>
    </Container>
  );
}
3;
