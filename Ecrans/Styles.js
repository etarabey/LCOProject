import * as React from 'react';
import styled from 'styled-components/native'; 
import {StyleSheet} from 'react-native'; 


const NewStyle = styled.SafeAreaView`
        flex: 1;
        background:  #B7C3BE;
        alignItems: center;
        justifyContent: center;`
const Button = styled.TouchableOpacity`
        background: #84A493;
        font-family: Arial; 
        border: 2px solid;
        border-color: #055A49;
        padding: 25px 25px;
        border-radius:50px;
       `
const LoginButton = styled.TouchableOpacity`
        border 2px solid; 
        border-color: #181515; 
        padding: 25px 25px; 
        border-radius: 50px;
`
const LangButton = styled(Button)`
        padding: 20px 20px; 
`
        

const Text2 = styled.Text`
font-size: 20px; 
font-family: Futura;
padding: 10px;
`
const WeatherText = styled.Text`
font-size: 25px;
font-family: Futura; 
font-weight: bold; 
padding: 10px;
`
const BoxofText = styled.TextInput`
        height: 50px; 
        margin: 10px; 
        border-width: 1px;
        padding: 10px 150px;
        backgroundcolor: 'blue';`


const DiffStyles = StyleSheet.create({ 
        input:{ 
                height: 50, 
                width: 300,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: 'white',
        }

})

const StyledComponents = { 
    NewStyle, 
    Button,
    Text2,
    WeatherText,
    LangButton, 
    BoxofText, 
    DiffStyles,
    LoginButton
}


export default StyledComponents;