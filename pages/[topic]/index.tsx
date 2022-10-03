import type { NextPage } from "next";
import styled from "styled-components";
import BackButton from "../../components/backButton";
import Card from "../../components/card";
import Cards from "../../components/cards";
import Layout from "../../components/layout";
import { getTopicIds, getSortedNotesData } from "../../lib/notes";
import { capitalize } from "../../lib/utils";

const colors = [
  "#3b82f6",
  "#f59e0b",
  "#f43f5e",
  "#06b6d4",
  "#17a25a",
  "#ef4444",
  "#0ea5e9",
  "#f97316",
];

const Header = styled.span`
  display: flex;
  gap: 1em;
`

interface Props {
  topic: string;
  allNotes: { id: string; title: string; excerpt: string }[];
}

const Notes: NextPage<Props> = ({ topic, allNotes }) => {
  return (
    <Layout>
      <Header>
        <BackButton />
        <h1>{capitalize(topic)}</h1>
      </Header>
      <Cards>
        {allNotes.map((notes, idx) => (
          <Card
            key={notes.id}
            title={notes.title}
            href={`${topic}/${notes.id}`}
            color={colors[idx]}
          />
        ))}
      </Cards>
    </Layout>
  );
};

export async function getStaticPaths() {
  const topics = getTopicIds();
  return {
    paths: topics,
    fallback: false,
  };
}

interface Params {
  params: {
    topic: string;
  };
}

export async function getStaticProps({ params: { topic } }: Params) {
  const allNotes = getSortedNotesData(topic);
  return {
    props: { topic, allNotes },
  };
}

export default Notes;
