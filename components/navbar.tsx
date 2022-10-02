import Link from "next/link";
import styled from "styled-components";
import { getTopics } from "../lib/notes";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
`

const Logo = styled.h1`
  font-size: 1.5rem;
`
const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        <Logo>Anshul&#39;s Notes</Logo>
        <Link href="/react" passHref>React</Link>
        <Link href="/networking" passHref>Networking</Link>
        <Link href="/machine-learning" passHref>Machine Learning</Link>
      </NavItems>
      <NavItems>
        <Link href="#">Change Theme</Link>
        <a href="#">github</a>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
