import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { ProfileBody, ProfileButtons } from "../screenComponents/ProfileBody";
import { FriendsProfileData } from "../screenComponents/Database";

export default function FriendProfile({ route, navigation }) {
  const { name, profileImage, follow, post, followers, following } =
    route.params;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "92%",
          }}
        >
          <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>
            {name}
          </Text>
          <Feather name="more-vertical" size={20} color="black" />
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons id={1} />
      <Text style={{ paddingVertical: 10, fontSize: 15, fontWeight: "bold" }}>
        Suggested for you
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 10 }}
      >
        {name === FriendsProfileData.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollowing, setIsFollowing] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "#dedede",
                        borderRadius: 2,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={{ position: "absolute", top: 10, right: 10 }}
                      >
                        <AntDesign name="close" size={20} color="black" />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
                      <Text style={{ fontSize: 12 }}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollowing(!isFollowing)}
                        style={{ width: "80%", paddingVertical: 10 }}
                      >
                        <View
                          style={{
                            width: " 100%",
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollowing ? null : "#3493d9",
                            borderColor: "#dedede",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: isFollowing ? "black" : "white",
                              fontWeight: "bold",
                            }}
                          >
                            {isFollowing ? "Following" : "Follow"}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
}
