import { FC } from 'react';
import Link from 'next/link';

import PostTag from './components/PostTag';
import PostBtn from './components/PostBtn';
import PostDate from './components/PostDate';
import PostPreview from './components/PostPreview';

const PostCard: FC = () => {
  return (
    <article className="post-card group mb-[6rem] flex last:mb-0">
      <div className="post-card__preview relative mr-10 h-[10rem] w-[10rem] shrink-0 overflow-hidden rounded-md">
        <PostDate />
        <PostPreview />
      </div>
      <div className="post-card__info">
        <div className="post-card__tags mb-3 flex gap-7">
          <PostTag tag="To Do" />
          <PostTag tag="Create" />
          <PostTag tag="Tags" />
        </div>
        <h2 className="post-card__title mb-3 text-2xl">
          <Link href={`/posts/post-slug-path`}>This is my blog post title</Link>
        </h2>
        <p className="post-card__excerpt mb-4 leading-7 tracking-wide line-clamp-2">
          There are a few cases where it might make sense to modify the “back”
          button’s behavior. For example, if you build a page where you choose
          something, then see an “are you sure?” There are a few cases where it
          might make sense to modify the “back” button’s behavior. For example,
        </p>
        <PostBtn slug="post-slug-path">Read</PostBtn>
      </div>
    </article>
  );
};

export default PostCard;
