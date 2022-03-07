import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../screenComponents/SearchBox";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import SearchContent from "../screenComponents/SearchContent";

export default function Search() {
  const [image, setImage] = useState(null);
  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <View
          style={{ margin: 25, justifyContent: "center", alignItems: "center" }}
        >
          <AntDesign name="pluscircleo" size={40} style={{ opacity: 0.5 }} />
        </View>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          <StatusBar backgroundColor={"#525252"} barStyle="dark-content" />
          <View
            style={{
              position: "absolute",
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: "white",
              width: 350,
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: "600" }}>codewme</Text>
              </View>
            </View>
            <Image source={image} style={{ width: "100%", height: "80%" }} />
            <View
              style={{
                justifyContent: "space-between",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
              }}
            >
              <Ionicons name="ios-heart-outline" size={26} />
              <Ionicons name="ios-person-circle-outline" size={26} />
              <Feather name="navigation" size={26} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
