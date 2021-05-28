import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'


import CameraUse from './screens/CameraUse'


const Stack = createStackNavigator()


function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="CameraUse" component={CameraUse}/>
      </Stack.Navigator>

    )
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer> 
  );
}


