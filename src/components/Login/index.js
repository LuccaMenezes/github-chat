import React from 'react'
import { auth, provider } from '../../services/firebase'
import * as C from "./styles"
import { BsGithub } from 'react-icons/bs';

const Login = () => {
   const handleSignin = () => {
     auth.signInWithPopup(provider).catch(alert);
   };
   return (
     <C.Container>
      <div><BsGithub /></div>    
      <C.Button onClick={handleSignin}>Login com GitHub</C.Button>
     </C.Container>
   );
 };
 
 export default Login;