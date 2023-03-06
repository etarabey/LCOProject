import * as React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import {View,Text} from 'react-native'; 

export function Messages(){ 
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
            <Text> 
                Hi
            </Text>
        </View>
    );
}
