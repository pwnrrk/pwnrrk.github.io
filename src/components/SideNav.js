import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
const { default: styled } = require("styled-components");

const SideNavWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 15;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  @media (min-width: 768px) {
    display: none;
  }
  &.active {
    transform: translateX(0);
  }
`;

const SideNavMenu = styled.ul`
  list-style: none;
  line-height: 5;
  text-align: center;
  padding: 0.5rem;
`;

const SideNavMenuItem = styled.li`
  padding: 0.5rem;
  font-size: 1.3rem;
`;

const SideNavLink = styled.a`
  text-decoration: none;
  color: var(--body-color);
`;

const close = () => document.getElementById("SideNav").classList.remove("active");

const SideNav = () => (
  <SideNavWrapper id="SideNav">
    <SideNavMenu>
      <SideNavMenuItem>
        <SideNavLink onClick={close} href="#home">Home</SideNavLink>
      </SideNavMenuItem>
      <SideNavMenuItem>
        <SideNavLink onClick={close} href="#about">About Me</SideNavLink>
      </SideNavMenuItem>
      {/*<SideNavMenuItem>
        <SideNavLink onClick={close} href="#projects">Projects</SideNavLink>
      </SideNavMenuItem>*/}
      <SideNavMenuItem>
        <SideNavLink onClick={close} href="https://facebook.com/pwnrrk" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </SideNavLink>
      </SideNavMenuItem>
      <SideNavMenuItem>
        <SideNavLink onClick={close} href="https://instagram.com/r.phuwanat" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        </SideNavLink>
      </SideNavMenuItem>
      <SideNavMenuItem>
        <SideNavLink onClick={close}>
          <u>Close</u>
        </SideNavLink>
      </SideNavMenuItem>
    </SideNavMenu>
  </SideNavWrapper>
);

export default SideNav;
