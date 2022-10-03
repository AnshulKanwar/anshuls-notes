import type { NextPage } from "next";
import styled from "styled-components";
import Cards from "../components/cards";
import Card from "../components/card";
import Layout from "../components/layout";
import { getTopics } from "../lib/notes";

const colors = ["#17a25a", "#3b82f6", "#f59e0b", "#f43f5e", "#06b6d4", "#f97316", "#ef4444", "#0ea5e9"]

const CenterText = styled.div`
  text-align: center;
  font-size: 1.2rem;
`
const Heading = styled.h1`
  font-size: 3rem;
  color: var(--accent);
`

interface Props {
  topics: string[];
}

const Home: NextPage<Props> = ({ topics }) => {
  return (
    <Layout>
      <CenterText>
        <Heading>Anshul&#39;s Notes</Heading>
        <span>
          This site contains all of my notes and resources from various computer
          science fields
        </span>
      </CenterText>
      <Cards>
        {topics.map((topic, idx) => (
          <Card key={topic} title={topic} href={topic} color={colors[idx]}/>
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
