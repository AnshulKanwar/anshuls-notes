import type { NextPage } from "next";
import Link from "next/link";
import styled, { css } from "styled-components";
import Layout from "../components/layout";
import { getTopics } from "../lib/notes";
import { kebabCaseToUpperCase } from "../lib/utils";

interface Props {
  topics: string[];
}

const Home: NextPage<Props> = ({ topics }) => {
  return (
    <Layout>
      {topics.map((topic) => (
        <div key={topic}>
          <Link href={topic}>{kebabCaseToUpperCase(topic)}</Link>
        </div>
      ))}
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
