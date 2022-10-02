import type { NextPage } from "next";
import Cards from "../components/cards";
import Card from "../components/card";
import Layout from "../components/layout";
import { getTopics } from "../lib/notes";

interface Props {
  topics: string[];
}

const Home: NextPage<Props> = ({ topics }) => {
  return (
    <Layout>
      <div>
        <h1>Anshul&#39;s Notes</h1>
        <span>
          This site contains all of my notes and resources from various computer
          science fields
        </span>
      </div>
      <Cards>
        {topics.map((topic) => (
          <Card key={topic} title={topic} href={topic}/>
        ))}
      </Cards>
    </Layout>
  );
};

export async function getStaticProps() {
  const topics = getTopics();
  return {
    props: {
      topics,
    },
  };
}

export default Home;
