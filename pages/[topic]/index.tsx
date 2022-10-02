import { getTopicPaths } from "../../lib/notes";

interface Props {
  notes: any;
}

const Notes: React.FC<Props> = ({ notes }) => {
  return <div>notes</div>;
};

export async function getStaticPaths() {
  const topics = getTopicPaths();
  return {
    paths: topics,
    fallback: false,
  };
}

interface StaticProps {
  params: {
    topic: string;
  };
}

export async function getStaticProps({ params: { topic } }: StaticProps) {
  return {
    props: { notes: {} },
  };
}

export default Notes;
