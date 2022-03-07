import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Status({ route }) {
  const navigation = useNavigation();

  const { name, image } = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: "95%",
          borderWidth: 1,
          backgroundColor: "gray",
          position: "absolute",
          top: 10,
        }}
      >
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "white",
            width: progressAnimation,
          }}
        ></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 12,
          left: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: "orange",
              resizeMode: "cover",
              width: "92%",
              height: "92%",
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 15, paddingLeft: 10 }}>
            {name}
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="close"
              size={20}
              color="white"
              opacity={0.1}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{ position: "absolute", width: "100%", height: 600 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginVertical: 10,
          width: "100%",
        }}
      >
        <TextInput
          placeholder=" send message"
          placeholderTextColor="white"
          style={{
            borderRadius: 25,
            borderColor: "white",
            width: "85%",
            height: 40,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 16,
            color: "white",
          }}
        />

        <Feather
          name="navigation"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
          style={{ alignSelf: "center" }}
        />
      </View>
    </View>
  );
}
