//Import necessary components
import React from "react";
import { HeaderComp } from "./HeaderComp"; 
import { FooterComp } from "./FooterComp"; 
import MainComp from "./MainComp";
import Nav from "./Nav"; 
import Container from "./Container";

export default function Education() { 
    return (
        <>
            {/* Header component with the title "Education" */}
            <HeaderComp title="Education" /> 
            
            {/* Container to structure the layout of the page */}
            <Container>
            
                {/* Navigation component for site navigation */}
                <Nav />
                
                {/* Main component that displays the education details */}
                <MainComp
                    content={
                        <>
                            {/* Education information for Boston University */}
                            <p>
                                <b>Boston University</b> | Boston, MA <br />
                                Expected Graduation: May 2025 <br />
                                Bachelor of Arts in Computer Science
                            </p>
                            
                            {/* Relevant coursework related to Computer Science */}
                            <p>
                                <em>Relevant Coursework:</em> Introduction to Computer Science, Data Structures, Analysis of Algorithms
                            </p>
                        </>
                    }
                />
                
            </Container>
            
            {/* Footer component for the bottom of the page */}
            <FooterComp />
        </>
    );
}
