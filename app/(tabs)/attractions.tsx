import { View, Text } from 'react-native';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <Container>
      <View className="h-full w-full items-center justify-center">
        <Text>Attractions</Text>
      </View>
    </Container>
  );
}
