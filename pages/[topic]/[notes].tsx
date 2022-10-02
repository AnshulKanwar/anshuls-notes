import type { NextPage } from "next"
import Layout from "../../components/layout"

const Notes: NextPage = () => {
  return (
    <Layout>
      Notes
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {

    }
  }
}

export default Notes