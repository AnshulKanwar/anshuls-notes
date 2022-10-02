import Head from "next/head";
import styled from "styled-components";
import Navbar from "./navbar";

interface Props {
  children?: React.ReactNode;
}

const Content = styled.div`
  max-width: 800px;
  margin: 3em auto;
  padding: 2em;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
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
    </div>
  );
};

export default Layout;
