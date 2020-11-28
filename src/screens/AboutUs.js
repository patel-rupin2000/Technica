import React, { Component } from "react";
import { StyleSheet, Text, View ,ImageBackground ,Image ,ScrollView ,TouchableOpacity ,Linking} from "react-native";
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
import ExternalLink from './ExternalLink';

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
      <View style={{paddingTop:"40%"}}>
      <Text style={styles.title}>Team</Text>
      <Text style={{color:"white",textAlign: 'justify',flex:1,justifyContent:"center"}}>Technica is a 36-hour hackathon conducted by ISTE-VIT in Horizon, aimed at stimulating ideas, creativity and innovation in a fun and  competitive environment. With over 400 participants, and an array of creative ideas, Technica inspires them to push their limits in the quest to a technically brighter future.</Text>
      </View>
      <ScrollView style={{paddingTop:"5%"}}>
  

      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      </ScrollView>
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
  title: {
    
    color: 'white',
    fontWeight:'bold',
    fontSize:30,
    
    
    marginTop: -130,
    textAlign: 'justify',
    color:"#27a5ef"
  },
  para:{
          fontWeight:"bold",
          borderRadius:15,
          justifyContent:"center",
          alignItems:"center",
          color: "white",
          padding:5,
          margin:5      
  },
  leftContainer:{
          flex: 1,
          margin: 10,
          width: "95%",
          height:"100%",
          backgroundColor: "#27a5ef",
          flexDirection: "row",
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:10,
          paddingRight:5,
          borderRadius:10
          },
  imageContainer: {
            width:"25%",
            height: "100%",
            justifyContent: "center",
            alignItems:"center",
            padding:10,
            borderRadius:90                      
          },
  textContainer: {
            width: "70%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }

});
export default AboutUs;
