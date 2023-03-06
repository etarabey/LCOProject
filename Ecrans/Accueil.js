import 'react-native-gesture-handler';
import React, {useEffect,useState} from "react";
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Text, Image } from 'react-native';
import StyledComponents from './Styles';

export function Accueil({navigation}) {
  const [buttonvalue,setbutton] = useState("EN"); 
  const Positionbutton = styled(StyledComponents.Button)`
    top: 50px;
  `
  const Positionbutton2 = styled(StyledComponents.Button)`
    bottom: 270px;
    
  `
  const Datestr = styled(StyledComponents.Text2)`
      font-family: Futura;
      font-size: 30px;
      font-weight: bold;
      bottom: 180px;
      padding: 1px;
  `
  const Weathertext = styled(StyledComponents.WeatherText)`
      padding: 10px;
      top: 50px;
      left: 30px;
  `
  const Ladate = new Date();
  //-----------------------------------------------------------------------------------
const [userdata,setData] = useState([]); 
const [isLoading,setLoading]= useState(true);
const thedata = async() => { 
  try{ 
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=82af15e275c24e949ed212814232202&q=Ottawa&aqi=no');
    const json = await response.json();
    setData(json.current);
   }
    catch(error){ 
      console.error(error);
  }
  
  finally{ 
    setLoading(false);
  }
  
  };
  
useEffect(()=>{
thedata();
},[]);
//-----------------------------------------------------------------------

  if (isLoading){ 
    return <Text>Loading...</Text>;
    //console.log(userdata);
  }
  return(
    <StyledComponents.NewStyle>
      <Image source={require("./LCOlogoimg.png")} style={{bottom:35}}/>
      <Weathertext>{userdata.temp_c}°C, {userdata.condition.text}</Weathertext>
      <Image source={{uri:'https:'+userdata.condition.icon}} style={{width:50,height:100,bottom:20,resizeMode:'contain',right:125,padding:20}}/>
      <Datestr>{Ladate.toDateString()}</Datestr>
      <Datestr>{Ladate.getHours()}:{Ladate.getMinutes()}</Datestr>
      < Positionbutton Press={() => navigation.navigate("Messages")}>
        <Image source={require('./Messageimgnobg.png')} style={{left:40}}/>
        <StyledComponents.Text2> Messages</StyledComponents.Text2>
      </Positionbutton>

      <Positionbutton2 onPress = {()=> navigation.navigate("Weather")}> 
        <StyledComponents.Text2>Go to the Weather </StyledComponents.Text2>
      
      </Positionbutton2>
      <StyledComponents.LangButton onPress = {()=> (buttonvalue==="EN")? setbutton("FR"): setbutton("EN")} style={{right:100}}> 
        <StyledComponents.Text2>{buttonvalue}</StyledComponents.Text2>
      </StyledComponents.LangButton>
      <Image source={require('./Helpcallimg.png')} style={{left:100,bottom:68}}/>
      <StatusBar style="auto" />
    </StyledComponents.NewStyle>

  );
}
