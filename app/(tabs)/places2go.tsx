import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ImageBackground } from 'react-native';
import { Container } from '~/components/Container';

export default function Places() {
  return (
    <Container>
      <View className="h-full w-full items-center justify-center border ">
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          locations={[0.2, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="absolute inset-0 h-full justify-start bg-[#11578F] pt-10"></LinearGradient>
      </View>
    </Container>
  );
}
