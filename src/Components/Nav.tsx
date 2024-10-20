import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Style the whole Navigation bar
const Navbar = styled.nav`
  background-color: #f2738c;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    justify-content: space-around;
  }
`;
// styled the unordered list
const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;
//style the individual list items
const NavLi = styled.li`
  padding: 10px 0;

  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
//style the linkes
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  font-size: calc(4px + 1vw);
  font-family: "Pacifico", cursive;

  &:hover {
    background-color: #fbd0d9;
    color: #5d091a;
  }
`;

// return the component 
const Nav: React.FC = () => {
  return (
    <Navbar>
      <NavUl>
        <NavLi><NavLink to="/">Home</NavLink></NavLi>
        <NavLi><NavLink to="/Education">Education</NavLink></NavLi>
        <NavLi><NavLink to="/Skills">Skills</NavLink></NavLi>
        <NavLi><NavLink to="/Projects">Projects</NavLink></NavLi>
        <NavLi><NavLink to="/Work">Work</NavLink></NavLi>
        <NavLi><NavLink to="/Certifications">Certifications</NavLink></NavLi>
        <NavLi><NavLink to="/Leadership">Leadership</NavLink></NavLi>
      </NavUl>
    </Navbar>
  );
};

export default Nav;
