import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const storyInfo = [
  {
    id: 1,
    name: "Your Story",
    image: require("../../storage/images/userProfile.png"),
  },
  {
    id: 2,
    name: "johndoe",
    image: require("../../storage/images/profile1.png"),
  },
  {
    id: 3,
    name: "perry_24",
    image: require("../../storage/images/profile2.png"),
  },
  {
    id: 4,
    name: "daniel031",
    image: require("../../storage/images/profile3.png"),
  },
  {
    id: 5,
    name: "tiktok_123",
    image: require("../../storage/images/profile4.png"),
  },
];

export default function Stories() {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", { name: data.name, image: data.image })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id === 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    size={20}
                    color="#405de5"
                    style={{ backgroundColor: "white", borderRadius: 100 }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    width: "92%",
                    height: "92%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  opacity: data.id === 0 ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
