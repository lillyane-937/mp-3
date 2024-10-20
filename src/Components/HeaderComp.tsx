import React from "react";
import styled from "styled-components";

// Styled component for the header section of the webpage
const HeaderDiv = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(2px + 2vw);
    font-family: "Pacifico", cursive;
    color: white;
    background-color:#DB7093;
    
    @media screen and (max-width: 750px) {
        padding: 20px 10px;
        text-align: center;
}
`;

// Header component that accepts a title as a prop
export function HeaderComp({ title }: { title: string }) {
    return (
        <HeaderDiv>
            <h1>{title}</h1>
        </HeaderDiv>
    );
}