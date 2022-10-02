import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";
import { useTheme } from "next-themes";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.3rem;

  display: grid;
  place-items: center;
`;

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme == "light" ? (
        <Button onClick={() => setTheme("dark")}>
          <TbSun />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")}>
          <TbMoon />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
