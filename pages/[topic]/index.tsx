import type { NextPage } from "next";
import Card from "../../components/card";
import Cards from "../../components/cards";
import Layout from "../../components/layout";
import { getTopicIds, getSortedNotesData } from "../../lib/notes";
import { capitalize } from "../../lib/utils";

interface Props {
  topic: string;
  allNotes: { id: string; title: string; excerpt: string }[];
}

const Notes: NextPage<Props> = ({ topic, allNotes }) => {
  return (
    <Layout>
      <h1>{ capitalize(topic) }</h1>
      <Cards>
        {allNotes.map((notes) => (
          <Card
            key={notes.id}
            title={notes.title}
            href={`${topic}/${notes.id}`}
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
