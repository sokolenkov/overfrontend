import fs from 'fs';
import Head from 'next/head';
import matter from 'gray-matter';
import type { NextPage } from 'next';

import {
  AuthorBlock,
  MainLayout,
  Pagination,
  PostCard,
  PostList,
} from 'components';
import IPost from './posts/types';

interface Props {
  posts: IPost[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="homepage">
      <Head>
        <title>Overfrontend - A blog by Slava Sokolenko</title>
        <meta
          name="description"
          content="Personal blog by Slava Sokolenko. I explain with code and examples."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout headerTitle={'Overfrontend'}>
        <div className="container">
          <div className="pt-[10rem] pb-[12rem]">
            <AuthorBlock />
          </div>
          <div className="mx-auto mb-[8rem] max-w-[73.125rem]">
            <PostList>
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </PostList>
          </div>
          <div className="mb-[6rem]">
            <Pagination totalItems={10} currentPage={1} itemsPerPage={5} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

// generating the static props for the Index page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');
  // get post data & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      ...frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Home;
