import React from "react";
import BaseLayout from "components/layouts/BaseLayout";
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import * as PostUtils from "utils/PostUtils";

type IProps = {
  post: IPost
}

const Post = ({ post }: IProps) => {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <BaseLayout>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </BaseLayout>
  )
}

export async function getStaticProps({ params }: any) {
  // console.log("getStaticProps", params);
  try {
    const post  = await import(`content/posts/${params.slug}.md`);
    return {
      props: {
        post: {
          attributes: post.attributes,
          html: post.html
        } as IPost,
      },
    }
  } catch (error) {
    return { props: {} }
  }
}

export async function getStaticPaths() {
  const paths = await PostUtils.loadPosts()
    .map(blogName => {
      const slug = blogName.substring(0, blogName.length - 3);
      return ({
        params: {
          slug,
        }
      })
    });

  return {
    paths,
    fallback: false,
  }
}

export default Post;
