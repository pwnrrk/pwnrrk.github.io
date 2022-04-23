import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 10;
  padding: 1rem;
  background-color: var(--bg-color);
  transition: background 0.25s ease;
  @media (min-width: 768px) {
    padding: 0 5rem;
    justify-content: space-between;
  }
`;

const NavbarMenu = styled.ul`
  padding: 0;
  list-style: none;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const NavbarMenuItem = styled.li`
  padding: 1rem;
`;
const NavbarLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: background 0.25s ease;
  display: block;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
`;

const NavbarMenuToggle = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  color: var(--fg-color);
  background: none;
  @media (min-width: 768px) {
    display: none;
  }
`;

const openSideNav = () =>
  document.getElementById("SideNav").classList.add("active");

const navLinkClick = (event) => {
  event.preventDefault();
  let target = event.target.href;
  target = target.split("#");
  const id = target[target.length - 1];
  const targetSection = document.getElementById(id);
  targetSection.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <NavbarWrapper id="navbar">
    <NavbarMenuToggle onClick={openSideNav}>
      <FontAwesomeIcon icon={faBars} />
    </NavbarMenuToggle>
    <NavbarBrand href="/">R.Phuwanat</NavbarBrand>
    <NavbarMenu>
      <NavbarMenuItem>
        <NavbarLink href="#home" onClick={navLinkClick}>
          Home
        </NavbarLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarLink href="#about" onClick={navLinkClick}>
          About Me
        </NavbarLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarLink href="#projects" onClick={navLinkClick}>
          Experiences
        </NavbarLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarLink
          href="https://github.com/pwnrrk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </NavbarLink>
      </NavbarMenuItem>
    </NavbarMenu>
  </NavbarWrapper>
);
export default Navbar;
