import React from "react";
import { HeaderComp } from "./HeaderComp"; // Importing Header component
import { FooterComp } from "./FooterComp"; // Importing Footer component
import MainComp from "./MainComp"; // Importing Main component (where the content will go)
import Nav from "./Nav"; // Importing Navigation component
import Container from "./Container"; // Importing a container for layout purposes

// Certifications component definition
export default function Certifications() {
    return (
        <>
            {/* Header component with the title "Certifications" */}
            <HeaderComp title="Certifications" />

            {/* Container component for structuring the page */}
            <Container>
                {/* Navigation component for page navigation */}
                <Nav />

                {/* Main component where the certification details will go */}
                <MainComp
                    content={
                        <>
                            <p>
                                <b>Cornell University</b>
                            </p>
                            <p>
                                Machine Learning Foundations e-Certificate, Break Through Tech, May 2024 - August 2024
                            </p>
                        </>
                    }
                />
            </Container>

            {/* Footer component */}
            <FooterComp />
        </>
    );
}
