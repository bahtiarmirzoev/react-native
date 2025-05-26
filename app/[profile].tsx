import BackButton from "@/components/shared/back-button";
import { theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

interface UserData {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  name: string;
  location: string;
  company: string;
}

export default function ProfilePage() {
  const { width } = useWindowDimensions();
  const { profile } = useLocalSearchParams();
  const { bottom } = useSafeAreaInsets();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRepos, setUserRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserData = async (username: string) => {
    const res = await fetch("https://api.github.com/users/" + username);
    const data = await res.json();
    return data;
  };

  const fetchUserRepos = async (username: string) => {
    const res = await fetch(
      "https://api.github.com/users/" +
        username +
        "/repos?sort=updated&per_page=20"
    );
    const data = await res.json();
    return data;
  };

  const loadUserData = async () => {
    if (profile) {
      try {
        const user = await fetchUserData(profile as string);
        setUserData(user);
        const repos = await fetchUserRepos(profile as string);
        setUserRepos(repos);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadUserData();
  }, [profile]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadUserData();
    setRefreshing(false);
  };

  const renderRepoItem = ({ item }: { item: Repository }) => {
    return (
      <View style={styles.repoCard}>
        <View style={styles.repoHeader}>
          <Text style={styles.repoName}>{item.name}</Text>
          <View style={styles.repoStats}>
            <View style={styles.statItem}>
              <Ionicons
                name="star-outline"
                size={16}
                color={theme.colors.text.secondary}
              />
              <Text style={styles.statText}>{item.stargazers_count}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons
                name="git-branch-outline"
                size={16}
                color={theme.colors.text.secondary}
              />
              <Text style={styles.statText}>{item.forks_count}</Text>
            </View>
          </View>
        </View>
        {item.description && (
          <Text style={styles.repoDescription} numberOfLines={2}>
            {item.description}
          </Text>
        )}
        {item.language && (
          <View style={styles.languageContainer}>
            <View style={styles.languageDot} />
            <Text style={styles.languageText}>{item.language}</Text>
          </View>
        )}
      </View>
    );
  };

  const UserProfileHeader = () => (
    <View style={styles.profileSection}>
      <View style={styles.userCard}>
        <Image
          source={{
            uri: userData?.avatar_url || "https://place-hold.it/128x128",
          }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.displayName}>
            {userData?.name || userData?.login}
          </Text>
          <Text style={styles.username}>@{userData?.login}</Text>
          {userData?.bio && <Text style={styles.bio}>{userData.bio}</Text>}
          <View style={styles.userStats}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>
                {userData?.public_repos || 0}
              </Text>
              <Text style={styles.statLabel}>Repositories</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>{userData?.followers || 0}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>{userData?.following || 0}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
          {(userData?.location || userData?.company) && (
            <View style={styles.additionalInfo}>
              {userData?.company && (
                <View style={styles.infoItem}>
                  <Ionicons
                    name="business-outline"
                    size={16}
                    color={theme.colors.text.secondary}
                  />
                  <Text style={styles.infoText}>{userData.company}</Text>
                </View>
              )}
              {userData?.location && (
                <View style={styles.infoItem}>
                  <Ionicons
                    name="location-outline"
                    size={16}
                    color={theme.colors.text.secondary}
                  />
                  <Text style={styles.infoText}>{userData.location}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
      <Text style={styles.sectionTitle}>Repositories</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={{ ...styles.content, width: width - 24 }}>
        <FlatList
          onRefresh={handleRefresh}
          refreshing={refreshing}
          contentContainerStyle={{
            gap: 12,
            paddingTop: 12,
          }}
          ListHeaderComponent={
            <>
              <BackButton />
              {userData && <UserProfileHeader />}
            </>
          }
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                color={theme.colors.github.blue}
              />
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No repositories found</Text>
              </View>
            )
          }
          renderItem={renderRepoItem}
          data={userRepos}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.colors.github.gray.light,
  } as ViewStyle,
  content: {
    paddingTop: 24,
  } as ViewStyle,
  profileSection: {
    marginBottom: 12,
  } as ViewStyle,
  userCard: {
    backgroundColor: theme.colors.surface.primary,
    borderColor: theme.colors.border.default,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  } as ViewStyle,
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 16,
  } as ImageStyle,
  userInfo: {
    alignItems: "center",
  } as ViewStyle,
  displayName: {
    fontFamily: theme.fonts.jost.semiBold,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 4,
  } as TextStyle,
  username: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 16,
    color: theme.colors.text.secondary,
    marginBottom: 8,
  } as TextStyle,
  bio: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 14,
    textAlign: "center",
    color: theme.colors.text.secondary,
    marginBottom: 16,
    lineHeight: 20,
  } as TextStyle,
  userStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  } as ViewStyle,
  statContainer: {
    alignItems: "center",
  } as ViewStyle,
  statNumber: {
    fontFamily: theme.fonts.jost.semiBold,
    fontSize: 20,
  } as TextStyle,
  statLabel: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 12,
    color: theme.colors.text.secondary,
  } as TextStyle,
  additionalInfo: {
    alignItems: "center",
    gap: 8,
  } as ViewStyle,
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  } as ViewStyle,
  infoText: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 14,
    color: theme.colors.text.secondary,
  } as TextStyle,
  sectionTitle: {
    fontFamily: theme.fonts.jost.semiBold,
    fontSize: 20,
    marginBottom: 8,
  } as TextStyle,
  repoCard: {
    backgroundColor: theme.colors.surface.primary,
    borderColor: theme.colors.border.default,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  } as ViewStyle,
  repoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  } as ViewStyle,
  repoName: {
    fontFamily: theme.fonts.jost.medium,
    fontSize: 18,
    flex: 1,
    marginRight: 16,
  } as TextStyle,
  repoStats: {
    flexDirection: "row",
    gap: 16,
  } as ViewStyle,
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  } as ViewStyle,
  statText: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 12,
    color: theme.colors.text.secondary,
  } as TextStyle,
  repoDescription: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginBottom: 8,
    lineHeight: 20,
  } as TextStyle,
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  } as ViewStyle,
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0969da",
  } as ViewStyle,
  languageText: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 12,
    color: theme.colors.text.secondary,
  } as TextStyle,
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  } as ViewStyle,
  emptyText: {
    fontFamily: theme.fonts.jost.regular,
    fontSize: 16,
    color: theme.colors.text.secondary,
  } as TextStyle,
});
