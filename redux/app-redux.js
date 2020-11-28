import React from "react";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
var firebase = require("firebase");
const initialState={
    newsData:{ },
    emailData:{ }
  
  };
  const reducer =(state=initialState,action)=>{
    switch(action.type) {

        case "setnewsData":
            return { ...state, newsData: action.value };
        case "setemailData":
            return {...state,emailData:action.value};

        default: 
            return state;
    }
  
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
  const setemailData = (emailData) => {
    return {
        type: "setemailData",
        value: emailData
    };
  }
  const watchemailData = () => {

    return async function(dispatch) {
      const userData = await AsyncStorage.getItem('userData');
      const transformedData = JSON.parse(userData)
        const { token, userId, expiryDate,emailId} = transformedData
        
            var emailData=emailId;
            dispatch(setemailData(emailData));
        
    };
  }
  export { setnewsData, watchnewsData,setemailData,watchemailData,Store };