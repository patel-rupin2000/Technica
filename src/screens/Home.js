import React ,{useState, useEffect}from "react";

import {
  Container,
  Body,
  Content,
  Header,
  FooterTab,
  Icon,
  Title,
  Left,
  Button
  
} from "native-base";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { withNavigation } from "react-navigation";

import {Text,ScrollView,TextInput, View, KeyboardAvoidingView,ImageBackground, StyleSheet, ActivityIndicator, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

import {useDispatch} from 'react-redux'


import { setnewsData, watchnewsData,setemailData,watchemailData } from './../../redux/app-redux';
const mapStateToProps=(state)=>{
  return{
    emailData:state.emailData,
    

  };
}
const mapDispatchToProps=(dispatch)=>{
  return{ watchemailData:()=>{dispatch(watchemailData())}};
}
class Home extends React.Component {
  //const { email } = props.route.params;
  //console.log(navigation.getParam('email'))
  //console.log(navigation.getParam('email'));
  constructor(props){
    super(props);
    this.state={
      newsData:this.props.newsData,
    }
    this.props.watchemailData();
    console.log(this.props.emailData);
    
    
  }
  render(){
  console.log("---------------------------------------------------------------------------------------------");
  console.log(this.props.emailData);
  
  //let info=props.navigation.state.params;
  return (
    <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        
        <Body style={{alignContent:"center"}}>
          <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>Home</Text>
        </Body>
      </Header>
      <ImageBackground source={require("./bg.jpg")} style={styles.image}>
      <Text style={{fontWeight:"bold",fontSize:25,color:"white",alignSelf:"center",justifyContent:"center"}}>Hello </Text>
      <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
      
        <Text>QR CODE</Text>
        
      
    
  
  
       
  <Text style={{color:"white",fontSize:16}}></Text>
      </Body>
      </ImageBackground>
    </Container>
  );}
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);