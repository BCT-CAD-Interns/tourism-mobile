import '../global.css';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { Prompt_400Regular, Prompt_500Medium, Prompt_700Bold } from '@expo-google-fonts/prompt';
import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fonts } from '~/assets/fonts/theme/fonts';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-Black': Poppins_900Black,
    'Prompt-Regular': Prompt_400Regular,
    'Prompt-Medium': Prompt_500Medium,
    'Prompt-Bold': Prompt_700Bold,
    'Gotham-Bold': fonts.GothamBold,
    'Gotham-Book': fonts.GothamBook,
    'Gotham-Black': fonts.GothamBlack,
  });

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
