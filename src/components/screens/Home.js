import { View, Text, StatusBar, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{ fontFamily: "Lobster", fontSize: 25, fontWeight: "500" }}
        >
          Instagram
        </Text>
        <Feather name="navigation" size={24} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}
