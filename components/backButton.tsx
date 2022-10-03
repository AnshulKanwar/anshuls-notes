import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";
import styled from "styled-components";

const Button = styled.button`
  display: grid;
  place-items: center;

  background: transparent;
  border: none;

  font-size: 2rem;

  cursor: pointer;
`;

const BackButton = () => {
  const router = useRouter();
  return (
    <Button type="button" onClick={() => router.back()}>
      <TbArrowLeft />
    </Button>
  );
};

export default BackButton;
