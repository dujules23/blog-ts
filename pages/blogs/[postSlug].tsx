import { GetStaticPaths, GetStaticProps, NextPage } from 'next';


interface Props {}

const SinglePage: NextPage<Props> = () => {
  
   return <div>SinglePage</div>
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props:{}
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { postSlug: "clever-lazy-loading-for-javascript"}}],
    fallback: false // I'll come back to this later
  }
}

export default SinglePage