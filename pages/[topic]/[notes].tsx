import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import styled from "styled-components";
import Layout from "../../components/layout";
import { getNoteIds, getNotesData } from "../../lib/notes";

const Main = styled.main`
  max-width: 60ch;
  margin: 0 auto;
`;

interface Props {
  title: string;
  excerpt: string;
  source: MDXRemoteSerializeResult;
}

const Notes: NextPage<Props> = ({ title, excerpt, source }) => {
  return (
    <Layout>
      <Main>
        <h1>{title}</h1>
        <p>{excerpt}</p>
        <hr />
        <MDXRemote {...source} />
      </Main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const notes = getNoteIds();
  return {
    paths: notes,
    fallback: false,
  };
}

interface Params {
  params: {
    topic: string;
    notes: string;
  };
}

export async function getStaticProps({ params: { topic, notes } }: Params) {
  const source = getNotesData(topic, notes);
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return {
    props: {
      ...mdxSource.frontmatter,
      source: mdxSource,
    },
  };
}

export default Notes;
