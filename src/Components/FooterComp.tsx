import styled from "styled-components";
//style the footer section of the webpage
const FooterWrapper = styled.footer `
    position: relative;
    display:flex;
    flex-direction: column; 
    align-items: center;
    font-size: calc(2px +2vw);
    font-family: "Pacifico", cursive;
    background-color: #DB7093;
    text-align: center;
    padding: 15px;
    color:white;

    @media screen and (max-width: 750px) {
        padding: 20px 10px;
        text-align: center;
}
`
//export the componet and make sure the following text is display.
export function FooterComp({}){
    return(
        <FooterWrapper>
            <p>All rights reserved by Lilly Anestal: <a href="">Credits</a> &#169;</p> 
        </FooterWrapper>
    )
}
