import React from "react";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
var firebase = require("firebase");
const initialState={
    newsData:{ },
  
  };
  const reducer =(state=initialState,action)=>{
    switch(action.type) {

        case "setnewsData":
            return { ...state, newsData: action.value };

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
  export { setnewsData, watchnewsData,Store };