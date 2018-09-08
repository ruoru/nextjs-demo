import Layout from "./components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <Markdown
        source={`
          This is our blog post.
          Yes. We can have a [link](/link).
          And we can have a title as well.

          ### This is a title

          And here's the content.
        `}
      />
      <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;
