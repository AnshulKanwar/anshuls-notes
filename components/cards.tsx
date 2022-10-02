import styled from "styled-components";

const StyledCards = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;

interface Props {
  children: JSX.Element[];
}

const Cards: React.FC<Props> = ({ children }) => {
  return <StyledCards>{children}</StyledCards>;
};

export default Cards;
