import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
// import Video from "react-native-video";
import { Video } from "expo-av";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

export default function SingleReel({ item, index, currentIndex }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(false);

  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Video
          ref={videoRef}
          shouldPlay={currentIndex === index ? false : true}
          isLooping={true}
          resizeMode="cover"
          source={item.video}
          isMuted={mute}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </TouchableOpacity>
      <Ionicons
        name="volume-mute"
        size={mute ? 20 : 0}
        color="white"
        style={{
          position: "absolute",
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 60,
          padding: 10,
        }}
      >
        <View style={{}}>
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={item.postProfile}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginHorizontal: 10 }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-musical-note" size={16} color="white" />
            <Text style={{ color: "white" }}>
              Original audio - {item.title}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          right: 0,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setLike(!like)}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            size={25}
            color={like ? "red" : "white"}
          />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{item.likes}</Text>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name={"ios-chatbubble-outline"} size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name={"paper-plane-outline"} size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather name={"more-vertical"} size={25} color={"white"} />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
            margin: 10,
          }}
        >
          <Image
            source={item.postProfile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
}
