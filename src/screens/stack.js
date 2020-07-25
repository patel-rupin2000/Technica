import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Timeline from './Timeline';
import Home from './Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Timeline" component={Timeline} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;