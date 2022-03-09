import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ProfileBody, ProfileButtons } from "./../screenComponents/ProfileBody";
import { Entypo } from "@expo/vector-icons";
import BottomTabView from "../screenComponents/BottomTabView";

export default function Profile() {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="plus" size={40} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "black",
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ width: "100%", padding: 10 }}>
        <ProfileBody
          name={"Code With Me"}
          accountName={"codewme"}
          profileImage={require("../../storage/images/profile1.png")}
          followers={"2.1M"}
          following={"32"}
          post={"151"}
        />
        <ProfileButtons
          id={0}
          name="Code With Me"
          accountName={"codewme"}
          profileImage={require("../../storage/images/profile1.png")}
        />
      </View>
      <View>
        <Text style={{ padding: 10 }}>Story Highlights</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 5, paddingHorizontal: 5 }}
        >
          {circles}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
}
