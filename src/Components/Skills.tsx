import React from "react";
import { HeaderComp } from "./HeaderComp"; 
import { FooterComp } from "./FooterComp"; 
import MainComp from "./MainComp"; 
import Nav  from "./Nav";
import Container from "./Container";

export default function Skills() {
    return (
        <>
            {/* Header component with the title "Skills" */}
            <HeaderComp title="Skills" />

            {/* Container to structure the layout of the page */}
            <Container>

                {/* Navigation component to allow navigation between pages */}
                <Nav />

                {/* Main component that displays the skills content */}
                <MainComp
                    content={
                        <>
                            {/* Paragraph for programming skills with various languages */}
                            <p>
                                <b>Programming:</b> Experience with Git, Python, Java, JavaScript, Swift, HTML, CSS, Go, and C.
                            </p>

                            {/* Paragraph for tools and libraries used in data science and development */}
                            <p>
                                <b>Tools:</b> Jupyter, Numpy, Pandas, Matplotlib, Keras, Github, Google Colab
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
