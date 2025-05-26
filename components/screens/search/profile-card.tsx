import { theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IProfile {
  username: string;
  repo_count?: number;
  avatar_url: string;
}
export default function ProfileCard({
  username,
  repo_count,
  avatar_url,
}: IProfile) {
  return (
    <Pressable
      onPress={() => {
        router.navigate(`../${username}`);
      }}
      style={styles.profileCard}
    >
      <Image
        source={{
          uri: avatar_url || "https://place-hold.it/64x64",
        }}
        style={styles.profileCardImage}
      />
      <View style={styles.profileCardContent}>
        <Text style={styles.profileCardUserName}>{username}</Text>
        {/* <Text style={styles.profileCardRepos}>27 Repos</Text> */}
      </View>
      <Pressable style={styles.profileCardButton}>
        <Ionicons size={24} name="chevron-forward" />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    borderWidth: 1,
    backgroundColor: theme.colors.surface.primary,
    borderColor: theme.colors.border.default,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  profileCardImage: {
    width: 64,
    height: 64,
    borderRadius: "100%",
  },
  profileCardContent: {},
  profileCardUserName: {
    fontFamily: theme.fonts.jost.medium,
    fontSize: 24,
  },
  profileCardRepos: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 12,
  },
  profileCardButton: {
    marginLeft: "auto",
  },
});
