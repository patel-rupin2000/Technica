import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { View, Image, Alert, Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TimeLine from "./src/screens/Timeline";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Timeline from "./src/screens/Timeline";
import Home from "./src/screens/Home";
import Spotlight from "./src/screens/Spotlight";
import AboutUs from "./src/screens/AboutUs";
import { Container, Body, Content, Header } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator         tabBarOptions={{
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#FFFFFF',
      activeBackgroundColor: '#289BDF',
      inactiveBackgroundColor: '#27a5ef'
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          unmountOnBlur: true,
          tabBarIcon: () => (
            <Ionicons name="ios-home" size={26} color="white"  />
          ),
          
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="timeline-help"
              size={24}
              color="white"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawers = createDrawerNavigator();

function DrawerContent(props, { navigation }) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View>
          <Image
            source={require("./src/l5.png")}
            style={{
              height: 200,
              width: 200,
              justifyContent: "center",
              alignSelf: "center",
              paddingTop: 10,
              marginTop: 15,
            }}
          ></Image>
        </View>
        <Drawer.Section style={{ marginTop: 15 }}>
          <DrawerItem
            label="Home           "
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            label="Spotlight      "
            onPress={() => {
              props.navigation.navigate("Spotlight");
            }}
          />
          <DrawerItem
            label="About Us       "
            onPress={() => {
              props.navigation.navigate("AboutUs");
            }}
          />
        </Drawer.Section>
      </View>
      <Button title="LOGOUT" onPress={() => Alert.alert("The app is Logout")} />
    </DrawerContentScrollView>
  );
}
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawers.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawers.Screen name="Home" component={MyTabs} />

        <Drawers.Screen name="Spotlight" component={Spotlight} />
        <Drawers.Screen name="AboutUs" component={AboutUs} />
      </Drawers.Navigator>
    </NavigationContainer>
  );
}
