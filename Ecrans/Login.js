import 'react-native-gesture-handler'; 
import React, {useEffect,useState} from 'react'; 
import styled from 'styled-components/native'; 
import {Image,TouchableOpacity,Text} from 'react-native'; 
import StyledComponents from './Styles';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser'; 
import * as Google from 'expo-auth-session/providers/google'; 
import { makeRedirectUri, useAuthRequest, useAutoDiscovery, ResponseType, exchangeCodeAsync, AccessTokenRequest, startAsync} from 'expo-auth-session'; 
import {getAuth, signInWithCredential,GoogleAuthProvider, OAuthCredential,OAuthProvider, signInWithPopup} from 'firebase/auth'; 
import { firebaseinit } from './firebase-config'; 

WebBrowser.maybeCompleteAuthSession(); 
//const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;  
export function Login({navigation}){ 

   const [emails, setEmails] = useState([]); 
   const [currentemail, setemail] = useState(); 
   const [loading,setLoading] = useState(false);
   const [resultms, setms] = useState({});  


    //---------------------------------------------------------
    const [request, response, prompAsync] = Google.useIdTokenAuthRequest({
      clientId : '1065697500341-l8i82l7qfq2q7aff23e4apbi12oak301.apps.googleusercontent.com',
    }    ); 
    const logindiscovery = useAutoDiscovery('https://login.microsoftonline.com/common'); 

    
    
    /*const [requestms, responsems, promptasyncms] = useAuthRequest( 
        { 
            clientId: 'f2cceead-ed76-4788-8ed1-a289f672364b', 
            scopes: ['openid','email','profile','offline_access'], 
            redirectUri: makeRedirectUri({ 
                scheme: "exp://192.168.2.240:19000",
            }),
        }, 
        logindiscovery
    );*/

    const promptasyncms = async() => { 
        const auth0ClientId = 'f2cceead-ed76-4788-8ed1-a289f672364b';
        const result = await startAsync({ 
            authUrl: `https://login.microsoftonline.com/common?response_type=token&client_id=f2cceead-ed76-4788-8ed1-a289f672364b&redirect_uri=exp://192.168.2.240:19000&scope=https://graph.microsoft.com/User.Read`, 

        })
        const reponse = await fetch(`https://graph.microsoft.com/v1.0/me`,{ 
            headers: { 
                Authorization: `Bearer ${result.accessToken}`,
            },
        });
        const json = await reponse.json(); 
        console.log(json); 
    }

    const GoogleButton = styled(StyledComponents.LoginButton)`
        right: 90px; 
        
    `

    const OutlookButton = styled(StyledComponents.LoginButton)`
        left: 90px;
        bottom: 140px;
    `
    //---------------------------------------------------------------
    const getEmails = async(authemail) => { 
        try{ 

        
        const EmaildesClients = firebaseinit.firestore().collection('users').doc("Emails"); 
        await EmaildesClients.get().then(querySnapshot=> {
            const Lescourriels = querySnapshot.data();
            setEmails(Lescourriels['LCOEmails']); 
            console.log(emails, "Email"); 
            }
            
        ); 
        }
        finally{ 
            setemail(authemail.currentUser.email); 
            setLoading(false); 
        }
        };
   
       /*const newfunc = async() => {
        

    };*/
   useEffect(()  => {
    if(response?.type === 'success'){ 
        console.log("Login check"); 
        const{id_token} = response.params;
        const auth = getAuth(); 
        const credentials =  GoogleAuthProvider.credential(id_token); 
        console.log("Test"); 
        signInWithCredential(auth,credentials); 
        getEmails(auth); 
    }
    
        //newfunc();
        /*try{ 
        const accessToken = new AccessTokenRequest({ 
            code: responsems.params.code, 
            clientId: 'f2cceead-ed76-4788-8ed1-a289f672364b', 
            redirectUri: makeRedirectUri({
                scheme: 'exp://192.168.2.240:19000',
        }),
            scopes: ["profile", "email", "openid"],

        });
        console.log(accessToken); 
        const securedinfo = exchangeCodeAsync(accessToken, {
            tokenEndpoint: "https://login.microsoftonline.com/common",

        } ).then((microsoftresult) => { 
            console.log(microsoftresult); 
        })
        console.log(securedinfo);
    } 
        catch{ 
            console.error(error); 
        
         }*/

    
    },
        
   [response]); 


   if(emails.includes(currentemail)){ 
    navigation.navigate("Accueil"); 
   }
   else{ 

   }
  

   /*else{ 
    if (credentials)
   }*/


    return(
        <StyledComponents.NewStyle>
            <Image source= {require('./LCOBlessedImg.png')} style={{height:100,width:170, bottom:40}}/>
            <StyledComponents.Text2 style={{bottom:20}}> 
                Welcome to the LCO app!  
            </StyledComponents.Text2>
            <StyledComponents.Text2 style={{bottom:10}}> 
                Please Sign-in using one of the following: 
            </StyledComponents.Text2>
        <GoogleButton disabled={!request} onPress = {() => { 
            prompAsync(); 
        }}> 
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"}} style={{height: 120,width:120,top:20}}/>
        </GoogleButton>
        <OutlookButton  onPress = {() => { 
            promptasyncms();
        }}> 
            <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png'}} style={{width:100,height:120,bottom:10,resizeMode:'contain',padding:20}}/>
        </OutlookButton>
        <Image source = {require('./Helpcallimg.png')}style={{bottom:70}}/>
        <Image source = {require('./LCOWebsiteimg.png')}style={{bottom:60}}/>
        <Image source = {require('./LCOSocialMedia.png')}style={{bottom:50}}/> 
        <StatusBar style = "auto"/> 
        </StyledComponents.NewStyle>
    )
    };


