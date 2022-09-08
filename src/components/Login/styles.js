import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   height: 100vh;
   align-items: center;
   justify-content: center;
   background-color: #010409;

   svg {
      width: 100px;
      height: 100px;
      color: white;
    }
`;

export const Button = styled.button`
   background-color: green;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
   transition: 0.3s;
   margin-left: 50px;

   &:hover {
      background-color: #023f08;
      border-style: none;
    }
`;


