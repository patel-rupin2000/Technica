import React from "react";
import { StyleSheet, Text, View ,ImageBackground} from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Button,
  Title,
  Icon,
} from "native-base";
function AboutUs(props) {
  return (
    <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        <Body style={{alignContent:"center"}}>
          <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>About Us</Text>
        </Body>
      </Header>
      <ImageBackground source={require("./bg.jpg")} style={styles.image}>
      <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
        <Text>About Us Details</Text>
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
export default AboutUs;
