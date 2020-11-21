import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import React ,{ useState, useEffect, useRef } from "react";
import {Provider} from 'react-redux';
import ApiKeys from './constants';
import { View, Image, Alert, Button, StyleSheet, Text ,ImageBackground,TouchableHighlight} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Timeline1 from "./src/screens/Timeline";
import Home from "./src/screens/Home";
import Spotlight from "./src/screens/Spotlight";
import AboutUs from "./src/screens/AboutUs";
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
import { setnewsData, watchnewsData,Store } from './redux/app-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {connect} from 'react-redux';




//const Tabs = AnimatedTabBarNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#27a5ef',
      inactiveTintColor: '#FFFFFF',
      activeBackgroundColor: '#1e1e1e',
      inactiveBackgroundColor:'#1e1e1e',
      initialRouteName: "Home",
    }}
    >
    <Tab.Screen name="Home" component={Home}
    options={{
      tabBarLabel: "Home",
      unmountOnBlur: true,
      
    
      
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-home"  size={26} color={color} />
      ),
      
    }} />
    <Tab.Screen name="Timeline" component={Timeline1} 
           options={{
            unmountOnBlur: true,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                name="timeline-help"
                
                size={26}
                color={color}
              />
            ),
          }}
        />
  </Tab.Navigator>

    /*<Tabs.Navigator         tabBarOptions={{
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
    </Tabs.Navigator>*/
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
            onPress={()=>sendPushNotification()}
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
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootNavigator()
{

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  console.log(expoPushToken);
  
  console.log(notification && notification.request.content.title);
  console.log(notification && notification.request.content.body);
  console.log(notification && JSON.stringify(notification.request.content.data));
  
  if (!firebase.apps.length){
    firebase.initializeApp(ApiKeys.FirebaseConfig);
    
  }
const myitems=firebase.database().ref("trigger/send");
var count=0;
  
  myitems.on("value",datasnap=>{
    console.log(datasnap.val())
    if(datasnap.val()==1 && count==0){
      count=count+1;
      sendPushNotification();
      
      firebase.database().ref('trigger').set({
        send:0
      }
      )

    }
    
  })
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  sendPushNotification = () => {
    const mydata=firebase.database().ref("notification");
    mydata.on("value",datasnap=>{
      console.log(datasnap.val());
      var notify=datasnap.val();
      console.log(notify);
      let response = fetch('https://exp.host/--/api/v2/push/send',


    
      {
        
        
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          
          {
          to: expoPushToken,
          sound: 'default',
          title: 'Technica',
          body: notify,
        },
        ),
   
      });
      const myitems=firebase.database().ref("trigger/send");
      myitems.on("value",datasnap=>{
        console.log(datasnap.val())
        
        
          firebase.database().ref('trigger').set({
            send:0
          }
          )
    
        
        
      })
      

  
    
      
    })

 

  };
 
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

