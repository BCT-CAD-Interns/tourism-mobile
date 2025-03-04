import { useFonts } from 'expo-font';

export const fonts = {
  GothamBold: require('../Gotham/Gotham-Bold.otf'),
  GothamBook: require('../Gotham/Gotham-Book.otf'),
  GothamBlack: require('../Gotham/Gotham-Black.otf'),
};

// Hook to load fonts
export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'Gotham-Bold': require('~/assets/fonts/Gotham/Gotham-Bold.otf'),
    'Gotham-Book': require('~/assets/fonts/Gotham/Gotham-Book.otf'),
    'Gotham-Black': require('~/assets/fonts/Gotham/Gotham-Black.otf'),
  });

  return fontsLoaded;
}
