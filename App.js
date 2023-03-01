import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Accueil} from './Ecrans/Accueil';
import { Messages } from './Ecrans/Messages';
import {View,Text} from 'react-native';
import { Weather } from './Ecrans/Weather';
import { Login } from './Ecrans/Login';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'> 
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen
          name = "Accueil"
          component = {Accueil}
          options = {{title: "Bienvenue"}}
          />
        <Stack.Screen name = "Messages" component={Messages}/>
        <Stack.Screen name = "Weather" component = {Weather}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
