import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #010409;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: green;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export const Info = styled.span`
  font-size: 18px;
  color: #fff;
  text-align: center;
  max-width: 500px;
`;
