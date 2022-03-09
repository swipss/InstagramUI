import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

let circles = [];
let numberOfCircles = 10;

for (let index = 0; index < numberOfCircles; index++) {
  circles.push(
    <View key={index}>
      <View
        style={{
          width: 130,
          height: 150,
          marginVertical: 0.5,
          backgroundColor: "black",
          opacity: 0.1,
        }}
      ></View>
    </View>
  );
}
const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();
  const Posts = () => {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
          >
            {circles}
          </View>
        </ScrollView>
      </View>
    );
  };
  const Videos = () => {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
          >
            {circles}
          </View>
        </ScrollView>
      </View>
    );
  };
  const Tagged = () => {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
          >
            {circles}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1.5,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="ios-apps-sharp" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "ios-play-circle" : "ios-play-circle-outline"}
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tagged"
        component={Tagged}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "ios-person" : "ios-person-outline"}
                size={24}
                color="black"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabView;
