import Head from "next/head";
import styled from "styled-components";
import Navbar from "./navbar";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  background-color: var(--bg);
  color: var(--fg);
  min-height: 100vh;
`

const Content = styled.div`
  max-width: 800px;
  margin: 1em auto;
  padding: 2em;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Anshul&#39;s Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Content>
          {children}
        </Content>
      </div>
    </Container>
  );
};

export default Layout;
