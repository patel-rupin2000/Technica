import React , { useCallback, useEffect,useState } from "react";
import {connect} from 'react-redux';
import { StyleSheet, Text, View,ImageBackground,ScrollView} from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Button,
  Icon,
} from "native-base";
import { setnewsData, watchnewsData } from './../../redux/app-redux';
    
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
        
        
      }
      
      
      
    render(){
      console.ignoredYellowBox = ['Setting a timer'];

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
      <Body style={{ alignSelf: "center", paddingTop: "10%",marginHorizontal:5}}>
      
        <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.one}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.two}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.three}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.four}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.five}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.six}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.seven}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.eight}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.nine}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginVertical:20,justifyContent:"center"}}>{this.props.newsData.ten}</Text>
        </ScrollView>
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
