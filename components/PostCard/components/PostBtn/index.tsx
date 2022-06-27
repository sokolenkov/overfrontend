import { FC } from 'react';
import Link from 'next/link';

interface Props {
  slug: string;
  children: React.ReactNode;
}

const PostBtn: FC<Props> = ({ slug, children }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <button
        className="post-card__link inline-flex rounded-[3rem] border border-primary bg-[#fff] px-[1.5rem] py-[0.25rem]
              text-sm text-primary duration-200 ease-in hover:bg-primary hover:text-[#fff] hover:shadow-md"
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};

export default PostBtn;
