import React , { useCallback, useEffect,useState } from "react";
import * as firebase from 'firebase/app';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';

//import {firebaseConfig} from './config';
import { StyleSheet, Text, View,ImageBackground } from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Button,
  Icon,
} from "native-base";

import { setnewsData, watchnewsData } from './../../App';

 /*var firebaseConfig = {
  apiKey: "AIzaSyB01uuo_GDLQcr1YDb01AyQPmMHto1FbwE",
  authDomain: "technica-f80c3.firebaseapp.com",
  databaseURL: "https://technica-f80c3.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};*/
/*var firebaseConfig = {
  apiKey: "AIzaSyB01uuo_GDLQcr1YDb01AyQPmMHto1FbwE",
  authDomain: "technica-f80c3.firebaseapp.com",
  databaseURL: "https://technica-f80c3.firebaseio.com",
  projectId: "technica-f80c3",
  storageBucket: "technica-f80c3.appspot.com",
  messagingSenderId: "724606726589",
  appId: "1:724606726589:web:b8a9d138a0f5520e85e2d4",
  measurementId: "G-7ZDWKS3ZSB"
  };
  firebase.initailizeApp(firebaseConfig);
var database = firebase.database();
class AboutUs extends React.Component {
  componentDidMount(){
    const mynews=firebase.database().ref("news");
    mynews.on("value",datasnap=>{
      console.log(datasnap.val());
    })
  }*/
  /*const AboutUs = (props) =>{
    const [id, setId] = useState()

    const loadData = useCallback(async() =>{
        const response = await fetch("https://technica-f80c3.firebaseio.com/news.json")
        if (!response.ok){
          console.log("ffff");
          const resData=await response.json()
          const msg=resData.error;
          throw new Error(msg)
        }
        const resData = await response.json()
        setId(Object.values(resData)[0].id)
        console.log(Object.values(resData)[0].id);
        console.log("kkkk");
    }) 



    useEffect(() =>{
        loadData()
    },[loadData])*/
    
    const mapStateToProps=(state)=>{
      return{
        newsData:state.newsData,
        

      };
    }
    const mapDispatchToProps=(dispatch)=>{
      return{ watchnewsData:()=>{dispatch(watchnewsData())}};
    }
    class Spotlight extends React.Component{
      constructor(props){
        super(props);
        this.state={
          newsData:this.props.newsData,
        }
        this.props.watchnewsData();
        console.log(this.props.newsData.one);
        console.ignoredYellowBox = ['Setting a timer'];
        
      }
      
      
      
    render(){

  return (
    
    <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        <Body style={{alignContent:"center"}}>
          <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>Spotlight</Text>
        </Body>
      </Header>
      <ImageBackground source={require("./bg.jpg")} style={styles.image}>
      <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
      
        
        <Text style={{fontSize:20}}>{this.props.newsData.one}</Text>
      
      </Body>
      </ImageBackground>
    </Container>
  
  )}};
  

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
export default connect(mapStateToProps,mapDispatchToProps)(Spotlight);
