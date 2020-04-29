import React from "react";
import BaseLayout from "components/layouts/BaseLayout";
// import {react as HomeContent} from "content/pages/Home.md";
import Link from 'next/link';
import * as PostUtils from "utils/PostUtils";

type IProps = {
  posts: any[]
}

const Home: React.FC<IProps> = ({ posts }: IProps) => {
  return (
    <BaseLayout>
      <ul>
        {posts.map(blogName => {
          const slug = blogName.substring(0, blogName.length - 3);
          return (
            <li>
              <Link href={`/posts/${slug}`}>
                <a>{blogName}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  try {
    const posts = await PostUtils.loadPosts();
    return {
      props: {
        posts
      },
    }
  } catch (error) {
    return {
      props: { posts: [] },
    }
  }
}

export default Home;
