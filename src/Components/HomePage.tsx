import React from "react";
import { HeaderComp } from "./HeaderComp";
import { FooterComp } from "./FooterComp";
import MainComp from "./MainComp";
import Nav from "./Nav";
import Container from "./Container"



// Component for the home page of the site. It displays a short introduction and navigation.
export default function HomePage() {
    return (
        <>
            {/* Header component with the title "Home" */}
            <HeaderComp title="Home" />

            {/* Container to structure the layout of the page */}
            <Container>

                {/* Navigation component for navigating between different sections of the website */}
                <Nav />

                {/* Main component that displays the homepage introduction content */}
                <MainComp
                    content={
                        <>
                            <img src="/assets/IMG_1893.jpg" alt="image of me" />
                            <p>
                                I am Wetline (Lilly) Anestal, and I am a senior at Boston University studying Computer Science. 
                                I am interested in exploring different sectors within tech. Welcome to my online resume to 
                                take a look at my projects, leadership experiences, and skills.
                            </p>
                        </>
                    }
                />
            </Container>

            {/* Footer component to display at the bottom of the page */}
            <FooterComp />
        </>
    );
}
