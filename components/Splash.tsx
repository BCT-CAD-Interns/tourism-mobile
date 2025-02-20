import { Image, View } from 'react-native';
import { Container } from './Container';

export default function Splash() {
  return (
    <View className=" h-full w-full items-center justify-center border bg-navy_blue">
      <Image source={require('~/assets/expo_starter/bct-logo.png')} />
    </View>
  );
}
