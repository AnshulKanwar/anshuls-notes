import Head from "next/head";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Anshul&#39;s Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
