import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
import styled from "styled-components";
import { kebabCaseToUpperCase } from "../lib/utils";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: var(--fg);
  color: var(--bg);
  border: 2px solid var(--fg);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg);
    color: var(--fg);
    border: 2px solid var(--fg);
    cursor: pointer;
  }
`;

const CardLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;
interface Props {
  title: string;
  href: string
}

const Card: React.FC<Props> = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <StyledCard>
        <CardLink>{kebabCaseToUpperCase(title)}</CardLink>
        <TbArrowRight />
      </StyledCard>
    </Link>
  );
};

export default Card;
