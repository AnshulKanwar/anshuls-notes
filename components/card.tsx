import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
import styled from "styled-components";
import { kebabCaseToUpperCase } from "../lib/utils";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: ${props => props.color};
  color: white;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

const CardLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;
interface Props {
  title: string;
  href: string;
  color: string;
}

const Card: React.FC<Props> = ({ title, href, color }) => {
  return (
    <Link href={href} passHref>
      <StyledCard color={color}>
        <CardLink>{kebabCaseToUpperCase(title)}</CardLink>
        <TbArrowRight />
      </StyledCard>
    </Link>
  );
};

export default Card;
