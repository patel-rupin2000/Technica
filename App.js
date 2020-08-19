import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import {Provider} from 'react-redux';

import ApiKeys from './constants';

import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { View, Image, Alert, Button, StyleSheet, Text ,ImageBackground,TouchableHighlight} from "react-native";
import { NavigationContainer } from "@react-navigation/native";


import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Timeline1 from "./src/screens/Timeline";
import Home from "./src/screens/Home";
import Spotlight from "./src/screens/Spotlight";
import AboutUs from "./src/screens/AboutUs";
//import * as firebase from 'firebase/app';
var firebase = require("firebase");
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
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

const initialState={
  newsData:{ },

};
const reducer =(state=initialState,action)=>{
  return state;

};
const Store=createStore(reducer,applyMiddleware(thunkMiddleware));
const setnewsData = (newsData) => {
  return {
      type: "setnewsData",
      value: newsData
  };
}
const watchnewsData = () => {
  return function(dispatch) {
      firebase.database().ref("news").on("value", function(snapshot) {
          var newsData = snapshot.val();
          dispatch(setnewsData(newsData));
      }, function(error) { });
  };
}
export { setnewsData, watchnewsData };




const Tabs = AnimatedTabBarNavigator();
//const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tabs.Navigator         tabBarOptions={{
      activeTintColor: '#27a5ef',
      inactiveTintColor: '#FFFFFF',
      activeBackgroundColor: '#1e1e1e',
      initialRouteName: "Home",
      animationEnabled: true,
    labelStyle:{fontSize:20,fontWeight:"bold"}}}
      appearence={{tabBarBackground:"black",dotSize:"large",topPadding:10}}
  
>
      <Tabs.Screen
        name="Home"
        component={Home}
        
                
        
        options={{
          tabBarLabel: "Home",
          unmountOnBlur: true,
          
        
          
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-home"  size={26} color="#27a5ef" fontSize={20}  />
          ),
          
        }}
        

      />
      <Tabs.Screen
        name="Timeline"
        component={Timeline1}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="timeline-help"
              
              size={26}
              color="#27a5ef"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}


const Drawers = createDrawerNavigator();

function DrawerContent(props, { navigation }) {
  return (
    <ImageBackground  source={require("./src/screens/bg.jpg")} style={styles.image}>
    <DrawerContentScrollView {...props}>
      <View>
      <View style={styles.userInfoSection}>
      <Avatar.Image source={require("./avtar.png")} style={{backgroundColor:"transparent"}}
            size={25}
          />
        <Text style={{color:"white",fontSize:16}}>  Hello </Text>
        <Text style={{color:"white",fontSize:16}}> UserName</Text>

      </View>

        <View>
          <Image
            source={require("./src/l1.png")}
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
        <Drawer.Section style={{ marginTop: 15,flexDirection:"column",alignContent:"flex-start",marginLeft:"15%"}}>
          <DrawerItem
            label="Home"
            labelStyle={{color:"white",fontWeight:"bold",fontSize:18}}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            label="Spotlight"
            labelStyle={{color:"white",fontWeight:"bold",fontSize:18}}
            onPress={() => {
              props.navigation.navigate("Spotlight");
            }}
          />
          <DrawerItem
            label="About Us"
            labelStyle={{color:"white",fontWeight:"bold",fontSize:18}}
            onPress={() => {
              props.navigation.navigate("AboutUs");
            }}
          />
            <DrawerItem
            label="Logout"
            labelStyle={{color:"white",fontWeight:"bold",fontSize:18}}
            onPress={() => Alert.alert("The app is Logout")}
          />
        </Drawer.Section>
      </View>
      <View style={{backgroundColor:"transparent",alignSelf:"center",paddingTop:"60%",flexDirection:"row"}}>
        <Image source={require("./assets/iste_logo.png")} style={{height:30,width:30}}/>
        <Text style={{color:"white",fontSize:20}}> ISTE-VIT</Text>
      </View>
    </DrawerContentScrollView>
    </ImageBackground>
  );
}
export default function RootNavigator() {
  if (!firebase.apps.length){
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }
  return (
    <Provider store={Store}>
    
    <NavigationContainer>
      <Drawers.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawers.Screen name="Home" component={MyTabs} />

        <Drawers.Screen name="Spotlight" component={Spotlight} />
        <Drawers.Screen name="AboutUs" component={AboutUs} />
      </Drawers.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
    alignSelf:"center",
    flexDirection:"row",

  },

});
