import { View, Text, Pressable } from 'react-native';
import { Container } from './Container';
import Football from '~/assets/images/UI/American Football.svg';
import PressableText from './PressableText';
export default function Events() {
  return (
    <Container>
      <View className="h-full justify-center  bg-white ">
        <View className="h-2/3 " />
        <View className="h-[600px]">
          <View className="flex-row justify-between px-4">
            <View className="flex-row items-center gap-2">
              <Football fill={'#000'} width={24} height={24} />
              <Text className="font-poppins text-lg">Updates and Events</Text>
            </View>
            <Pressable className="justify-center">
              <Text className="font-poppins text-lg font-bold text-navy_blue">View All</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Container>
  );
}
