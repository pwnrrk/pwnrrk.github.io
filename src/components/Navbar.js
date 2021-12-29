import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const { default: styled } = require("styled-components");

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
  color: #fff;
  transition: background 0.25s ease;
  &.bg-active {
    background-color: #ffffff;
    color: inherit;
  }
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
  transition: color 0.25s ease;
  &:hover {
    color: #222;
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
  background: none;
  border: none;
  color: var(--body-color);
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarMenuToggleIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 100%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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

document.addEventListener("scroll", () => {
  var navbar = document.getElementById("navbar");
  var changePoint = document
    .getElementById("home")
    .getBoundingClientRect().bottom;
  if (window.scrollY > changePoint) {
    navbar.classList.add("bg-active");
  } else {
    navbar.classList.remove("bg-active");
  }
});

const Navbar = () => (
  <NavbarWrapper id="navbar">
    <NavbarMenuToggle onClick={openSideNav}>
      <NavbarMenuToggleIcon></NavbarMenuToggleIcon>
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
