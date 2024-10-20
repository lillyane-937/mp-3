import { HeaderComp } from "./HeaderComp"; 
import { FooterComp } from "./FooterComp"; 
import MainComp from "./MainComp"; 
import Nav from "./Nav"; 
import Container from "./Container";

export default function Leadership() {
    return (
        <>
            {/* Header component with the title "Leadership and Involvement" */}
            <HeaderComp title="Leadership and Involvement" />

            {/* Container to structure the layout of the page */}
            <Container>

                {/* Navigation component for navigating between different pages */}
                <Nav />

                {/* Main component that displays leadership and involvement content */}
                <MainComp
                    content={
                        <>
                            {/* Leadership Experience 1: Break Through Tech Fellow */}
                            <p>
                                <b>Fellow,</b> <i>Break Through Tech</i><br />
                                Engaged in a 12-month program, including Machine Learning coursework with Cornell faculty, experiential learning experiences, work on a real-world team-based ML project with a partnered company, and mentorship from industry professionals.
                                <br />
                            </p>

                            {/* Leadership Experience 2: Girls Who Code and Pluralsight Work Prep Participant */}
                            <p>
                                <b>Participant,</b> <i>Girls Who Code and Pluralsight Work Prep</i><br />
                                Selected for a three-week career readiness program focused on key software development skills.
                                <br />
                                Participated in workshops with concept deep dives, hands-on application, and peer collaboration.
                                <br />
                                Chosen as a Closing Ceremony speaker from over 50 participants.
                                <br />
                            </p>

                            {/* Leadership Experience 3: Boston University UWISE Mentor */}
                            <p>
                                <b>Mentor,</b> <i>Boston University UWISE</i><br />
                                Met once a month with a mentee to provide support on her educational and career goals in her chosen STEM field and developed a trustworthy rapport relationship.
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
