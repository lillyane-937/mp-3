import React from "react";
import styled from "styled-components";
//component used for structing all content displayed in the main section of the webapge
const MainDiv = styled.main`
  flex-grow: 1; /* Allow MainDiv to take up available space */
  background-color: #fbd0d9;
  align-items: center;
  font-size: calc(2px + 2vw);
  font-family: "Pacifico", cursive;
  color: #702963;
  padding: 20px;
  height: 100vh;
  overflow-y: auto; /* Allow vertical scrolling */
  
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
//export the function with only content as a prop
export default function MainComp({content, }: {content: React.ReactNode;}) {
  return (
    <MainDiv>
      {content} 
    </MainDiv>
  );
}
