import { GoogleAuthProvider, OAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth"; 
/*export function Auththeuser(value){ 
    const auth = getAuth(); 
    const Provider = GoogleAuthProvider(); 
    signInWithRedirect(auth,Provider); 
    const userInfo = getRedirectResult(auth).then((result)=> { 
        return result.user; 
    }).catch((error)=> { 
        console.error(error); 
    })
return userInfo;
}*/
