import { theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { router, SplashScreen } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [text, setText] = useState("");
  const { width } = useWindowDimensions();

  const handleChangeText = (text: string) => {
    setText(text);
  };
  const handleSearch = () => {
    router.push(`/search?username=${text}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <View
          style={{
            ...styles.content,
            width: width - 24,
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/icon.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              value={text}
              onChangeText={handleChangeText}
              placeholder="Your name"
              style={styles.input}
            />
            <Pressable onPress={handleSearch} style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
              <Ionicons
                style={{
                  ...styles.buttonText,
                  fontSize: 20,
                }}
                name="search"
              />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.github.gray.light,
  },
  content: {
    alignItems: "center",
    gap: 24,
  },
  image: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
  inputWrapper: {
    width: "100%",
    gap: 12,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    borderColor: theme.colors.border.default,
    height: 54,
  },
  button: {
    width: "100%",
    backgroundColor: theme.colors.github.black,
    color: theme.colors.github.white,
    paddingVertical: 12,
    borderRadius: 6,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttonText: {
    color: theme.colors.github.white,
    fontFamily: theme.fonts.jost.medium,
    fontSize: 24,
  },
});
