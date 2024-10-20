import React from "react";
import { HeaderComp } from "./HeaderComp"; // Importing the Header component
import { FooterComp } from "./FooterComp"; // Importing the Footer component
import MainComp from "./MainComp"; // Importing the Main component to display content
import Calculator from "./Calculator"; // Importing a Calculator component
import Nav from "./Nav"; // Importing the Nav component for navigation
import Container from "./Container"; // Importing a Container component for layout

// Functional component to display the Projects page
export default function Projects() {
    return (
        <>
            {/* Header component with the title "Projects" */}
            <HeaderComp title="Projects" />

            {/* Container component for structuring the layout */}
            <Container>
                {/* Navigation component */}
                <Nav />

                {/* Main component that displays project details and the calculator */}
                <MainComp
                    content={
                        <>
                            {/* Project 1: Instant Availability of Airbnb Listings */}
                            <p>
                                <b>Instant Availability of Airbnb Listings: A Decision Tree Approach</b> | Boston, MA, August 2024 <br />
                                Designed a decision tree model to predict booking availabilities using an Airbnb dataset, analyzing the number of beds, the host acceptance rates, and more features of the dataset.
                                <br />
                            </p>

                            {/* Project 2: Code Violations */}
                            <p>
                                <b>Code Violations</b> | Boston University, Jan 2024 - May 2024 <br />
                                Investigated multiple datasets to produce an interactive data visualization of the code violation disparities between Boston's Black and White neighborhoods in collaboration with a Black-owned editorial partner.
                                <br />
                            </p>

                            {/* Project 3: VideoScope */}
                            <p>
                                <b>VideoScope</b> | Massachusetts Institute of Technology, Oct 2022 <br />
                                Co-developed an educational web service at MIT’s hackathon using HTML to give students a new way to engage in lectures remotely.
                                <br />
                            </p>

                            {/* Subheading and Calculator component */}
                            <h2>Calculator</h2>
                            <Calculator /> {/* Displays the interactive calculator */}
                        </>
                    }
                />
            </Container>

            {/* Footer component */}
            <FooterComp />
        </>
    );
}
