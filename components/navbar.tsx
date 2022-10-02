import Link from "next/link";
import styled from "styled-components";

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

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        <h1>Anshul&#39;s Notes</h1>
        <Link href="/networking" passHref><NavLink>Networking</NavLink></Link>
      </NavItems>
      <NavItems>
        <NavLink href="#">Change Theme</NavLink>
        <NavLink href="#">github</NavLink>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
