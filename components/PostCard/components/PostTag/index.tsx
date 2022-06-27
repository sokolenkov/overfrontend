import React, { FC } from 'react';

interface Props {
  tag: string;
}

const PostTag: FC<Props> = ({ tag }) => {
  return <span className="post-card__tags__tag text-primary">#{tag}</span>;
};

export default PostTag;
