import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Feather, AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

const postInfo = [
  {
    postTitle: "codewme",
    postPersonImage: require("../../storage/images/userProfile.png"),
    postImage: require("../../storage/images/post1.png"),
    likes: 764,
    isLiked: false,
  },
  {
    postTitle: "johndoe",
    postPersonImage: require("../../storage/images/profile1.png"),
    postImage: require("../../storage/images/post2.png"),
    likes: 764,
    isLiked: false,
  },
  {
    postTitle: "perry_24",
    postPersonImage: require("../../storage/images/profile2.png"),
    postImage: require("../../storage/images/post3.png"),
    likes: 764,
    isLiked: false,
  },
  {
    postTitle: "daniel031",
    postPersonImage: require("../../storage/images/profile3.png"),
    postImage: require("../../storage/images/post4.png"),
    likes: 764,
    isLiked: false,
  },
];

export default function Post() {
  return (
    <View>
      {postInfo.map((data, index) => {
        const [liked, setLiked] = useState(data.isLiked);

        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={data.postPersonImage}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" size={20} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name={liked ? "heart" : "hearto"}
                  style={{ paddingRight: 10 }}
                  size={20}
                  color={liked ? "red" : "black"}
                  onPress={() => setLiked(!liked)}
                />
                <Ionicons
                  name="ios-chatbubble-outline"
                  size={20}
                  style={{ paddingRight: 10 }}
                />
                <Feather name="navigation" size={20} style={{}} />
              </View>
              <View>
                <Feather name="bookmark" size={20} />
              </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={{ fontWeight: "700" }}>
                Liked by{liked ? " you and" : " "} {data.likes} others
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 2 }}>
                Follow me on TikTok :)
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ opacity: 0.5 }}>Add a comment </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="emoji-happy"
                    size={15}
                    color="lightgreen"
                    style={{ marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    size={15}
                    color="pink"
                    style={{ marginRight: 10 }}
                  />
                  <Entypo name="emoji-sad" size={15} color="red" />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
