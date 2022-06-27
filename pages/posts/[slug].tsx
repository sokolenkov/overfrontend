import fs from 'fs';
import Head from 'next/head';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import IPost from './types';
import { PostLayout } from 'components';
import { getDateStrFromTstamp } from 'utils/funcs';

const Index: NextPage<IPost> = ({ title }) => {
  return (
    <div className="post">
      <Head>
        <title>Post title</title>
        <meta name="description" content="Post description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout headerTitle="querytitle">
        <div className="container">
          <div className="post__content mx-auto mt-[3rem]">
            <div className="post__content-head">
              <h1 className="post__content-title text-[3rem]">{title}</h1>
              <div className="post__meta flex gap-6">
                <p className="post__meta-date">{'18 Dec, 2022'}</p>
                <p className="post__meta-read before:content-['☕️']">5 min</p>
              </div>
              <div className="post__content-img__wrap flex overflow-hidden rounded-md shadow-md">
                {/* <img
                  className="post__content-img"
                  loading="lazy"
                  width={postImgW}
                  height={postImgH}
                  src={postImgUrl}
                  alt={headingImage.alt}
                /> */}
                {/* <Img /> */}
              </div>
            </div>
            <div className="post__content-body prose mx-auto max-w-[45rem]">
              content
            </div>
          </div>
        </div>
      </PostLayout>
    </div>
  );
};

// Generating the paths for each post
export const getStaticPaths: GetStaticPaths = () => {
  // get list of all posts from posts directory
  const files = fs.readdirSync('posts');
  // create a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const fileName = fs.readFileSync(
    `posts/${context?.params?.slug}.md`,
    'utf-8'
  );
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      ...frontmatter,
      content,
    },
  };
};

export default Index;
