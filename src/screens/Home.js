import React from "react";
import { StyleSheet, Text, View,ImageBackground } from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  FooterTab,
  Icon,
  Title,
  Left,
  Button,
} from "native-base";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { withNavigation } from "react-navigation";

function Home(props) {
 

  return (
    <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        
        <Body style={{alignContent:"center"}}>
          <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>Home</Text>
        </Body>
      </Header>
      <ImageBackground source={require("./bg.jpg")} style={styles.image}>
      <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
        <Text>QR CODE</Text>
      </Body>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});
export default Home;
