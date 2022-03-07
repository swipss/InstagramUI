import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useFonts } from "@expo-google-fonts/lobster";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/screens/Home";
import Search from "./src/components/screens/Search";
import Reels from "./src/components/screens/Reels";
import Activity from "./src/components/screens/Activity";
import Profile from "./src/components/screens/Profile";
import Status from "./src/components/screenComponents/Status";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name={"search"} size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={
                  focused
                    ? "caret-forward-circle"
                    : "caret-forward-circle-outline"
                }
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "heart-sharp" : "heart-outline"}
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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

export default function App() {
  let [fontsLoaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} color={"black"} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
