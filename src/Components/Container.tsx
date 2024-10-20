import React from "react";
import styled from "styled-components";

// container component used to structure webpages to make website responsive 
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
//export the component
export default function Container({ children }: { children: React.ReactNode }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}