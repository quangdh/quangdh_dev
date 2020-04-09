import Head from "next/head"
import { Component } from 'react'
import Link from 'next/link';

const BLOG_POSTS_PATH = '../content/blogs';

const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../content/blogs', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/blogs/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class Home extends Component {

  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    const { postsList } = this.props;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          {postsList.map(post => {
            return (
              <Link href={`blog/post/${post.slug}`}>
                <a>
                  <img src={post.attributes.thumbnail} />
                  <h2>{post.attributes.title}</h2>
                </a>
              </Link>
            );
          })}

        </article>
      </>
    )
  }
}