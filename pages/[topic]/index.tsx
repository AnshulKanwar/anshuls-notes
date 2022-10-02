import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import { getTopicIds, getSortedNotesData } from "../../lib/notes";

interface Props {
  topic: string
  allNotes: { id: string; title: string; excerpt: string }[];
}

const Notes: NextPage<Props> = ({ topic, allNotes }) => {
  return (
    <Layout>
      {allNotes.map((notes) => (
        <div key={notes.id}>
          <Link href={`${topic}/${notes.id}`}>{notes.title}</Link>
        </div>
      ))}
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
