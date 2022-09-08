import React from 'react';
import * as C from './styles';
import { BsGithub } from 'react-icons/bs';

const Default = () => {
   return (
     <C.Container>
       <BsGithub />
       <C.Title>GitHub Chat</C.Title>
       <C.Info>
         Um chat inspirado no GitHub!
       </C.Info>
     </C.Container>
   );
 };
 
 export default Default;