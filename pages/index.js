import Layout from './components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Index = (props) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <Markdown source={`
          This is our blog post.
          Yes. We can have a [link](/link).
          And we can have a title as well.

          ### This is a title

          And here's the content.
        `} />
      <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }

      .markdown {
        font-family: 'Arial';
      }
 
      .markdown a {
        text-decoration: none;
        color: blue;
      }
 
      .markdown a:hover {
        opacity: 0.6;
      }
 
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>

    </Layout>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index