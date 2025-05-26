import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Jost-Thin": require("../assets/fonts/Jost-Thin.ttf"),
    "Jost-Light": require("../assets/fonts/Jost-Light.ttf"),
    "Jost-Regular": require("../assets/fonts/Jost-Regular.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost-Medium.ttf"),
    "Jost-SemiBold": require("../assets/fonts/Jost-SemiBold.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost-Bold.ttf"),
    "Jost-Black": require("../assets/fonts/Jost-Black.ttf"),
    "Jost-ExtraBold": require("../assets/fonts/Jost-ExtraBold.ttf"),
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
    <Tabs
      backBehavior="history"
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          animation: "shift",
          tabBarIcon: () => {
            return <Ionicons size={24} name="home-outline" />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          animation: "shift",
          href: null,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="[profile]"
        options={{
          title: "Search",
          animation: "shift",
          href: null,
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
