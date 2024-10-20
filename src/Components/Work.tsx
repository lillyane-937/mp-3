
import { HeaderComp } from "./HeaderComp"; // Import updated HeaderComp
import { FooterComp } from "./FooterComp"; // Import FooterComp
import MainComp from "./MainComp"; // Import MainComp
import Nav  from "./Nav"; 
import Container from "./Container";

export default function WorkExperience() {
    return (
        <>
            {/* Header component with the title "Work Experience" */}
            <HeaderComp title="Work Experience" />

            {/* Container to structure the layout of the page */}
            <Container>

                <Nav />

                {/* Main component that displays the work experience content */}
                <MainComp
                    content={
                        <>
                            {/* First work experience: Sargent College Makenchie Study */}
                            <p>
                                <b>Sargent College Makenchie Study</b> | <br />
                                <i>Media Technician</i> <br />
                                Sep 2024 - Present <br />
                                Support professors and faculty with tech-related issues in classrooms and conference rooms.
                                <br />
                                Learn new technologies and maintain various systems and programs at Sargent College.
                                <br />
                            </p>

                            {/* Second work experience: Boston University Orientation */}
                            <p>
                                <b>Boston University Orientation</b> | <br />
                                <i>Student Facilitator</i> <br />
                                May 2022 - Sep 2022 <br />
                                Greeted and checked in about 175 students a week.
                                <br />
                                Individually created and facilitated activities among groups of approximately 18 students weekly.
                                <br />
                                Independently led tours around Boston University’s Charles River Campus.
                                <br />
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
