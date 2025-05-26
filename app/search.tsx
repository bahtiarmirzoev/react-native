import ProfileCard from "@/components/screens/search/profile-card";
import BackButton from "@/components/shared/back-button";
import { theme } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Search() {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState<boolean>(true);
  const { username } = useLocalSearchParams();
  const { bottom } = useSafeAreaInsets();
  const [data, setData] = useState<any>();
  const [refreshing, setRefreshing] = useState(false);
  const searchUsers = async (username: string) => {
    const res = await fetch(
      "https://api.github.com/search/users?q=" + username
    );
    const data = await res.json();

    return data;
  };
  useEffect(() => {
    if (username) {
      searchUsers(username as string).then((res) => {
        setData(res);
        setLoading(false);
      });
    }
    return () => {
      setData(null);
      setLoading(true);
    };
  }, [username]);
  const renderItem = ({ item }: any) => {
    return <ProfileCard username={item.login} avatar_url={item.avatar_url} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    searchUsers(username as string).then((res) => {
      setData(res);
      setLoading(false);
      setRefreshing(false);
    });
  };
  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}
      edges={["bottom"]}
    >
      <View
        style={{
          ...styles.content,
          width: width - 24,
        }}
      >
        <FlatList
          onRefresh={handleRefresh}
          contentContainerStyle={{
            gap: 12,
            paddingTop: 12,
          }}
          refreshing={refreshing}
          ListHeaderComponent={
            <>
              <BackButton />
              <Text style={styles.resultsText}>Results:</Text>
            </>
          }
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator />
            ) : (
              <View>
                <Text>No results</Text>
              </View>
            )
          }
          renderItem={renderItem}
          data={data?.items as any}
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
  },
  content: {
    paddingTop: 24,
  },
  resultsText: {
    fontFamily: theme.fonts.jost.semiBold,
    fontSize: 24,
    paddingBottom: 12,
    alignSelf: "flex-start",
  },
});
