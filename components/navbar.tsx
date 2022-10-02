import Link from "next/link";
import styled from "styled-components";
import { TbBrandGithub } from "react-icons/tb";
import { getTopics } from "../lib/notes";
import ThemeToggle from "./themeToggle";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
`;

const NavItem = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        <NavItem>
          <Logo>
            <Link href="/">Anshul&#39;s Notes</Link>
          </Logo>
        </NavItem>
      </NavItems>
      <NavItems>
        <NavItem>
          <ThemeToggle />
        </NavItem>
        <a
          href="https://github.com/AnshulKanwar/anshuls-notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NavItem>
            <TbBrandGithub /> github
          </NavItem>
        </a>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
