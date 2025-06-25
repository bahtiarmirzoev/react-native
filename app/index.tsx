import { useFonts } from 'expo-font';
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();
export default function Index() {
   const [loaded, error] = useFonts({
    'Jost-Thin': require('../assets/fonts/Jost-Thin.ttf'),
    'Jost-Light': require('../assets/fonts/Jost-Light.ttf'),
    'Jost-Regular': require('../assets/fonts/Jost-Regular.ttf'),
    'Jost-Medium': require('../assets/fonts/Jost-Medium.ttf'),
    'Jost-SemiBold': require('../assets/fonts/Jost-SemiBold.ttf'),
    'Jost-Bold': require('../assets/fonts/Jost-Bold.ttf'),
    'Jost-Black': require('../assets/fonts/Jost-Black.ttf'),
    'Jost-ExtraBold': require('../assets/fonts/Jost-ExtraBold.ttf'),
    
  });

  useEffect(() => {
    
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

