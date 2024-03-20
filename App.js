import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PhoneNumber, ProfileAccount, Verification, Walkthourgh } from './screens';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  // load fonts
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Mulish-Black.ttf'),
    regular: require('./assets/fonts/Mulish-Regular.ttf'),
    bold: require('./assets/fonts/Mulish-Bold.ttf'),
    medium: require('./assets/fonts/Mulish-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Mulish-MediumItalic.ttf'),
    semiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
    semiBoldItalic: require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Walkthourgh"
        >
          <Stack.Screen name="Walkthourgh" component={Walkthourgh} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
