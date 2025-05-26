import { theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function BackButton({ goBack }: any) {
  const handleBack = () => {
    if (goBack) {
      goBack();
      return;
    }
    router.back();
  };
  return (
    <Pressable style={styles.btn} onPress={handleBack}>
      <Text style={styles.btnText}>
        <Ionicons name="arrow-back" /> Back
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "flex-start",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: theme.colors.background.dark,
  },
  btnText: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 18,
    color: theme.colors.surface.primary,
  },
});
