import { FC } from 'react';

import { SteamIcon, GitIcon, TgIcon } from 'components';
import img from 'assets/images/author.jpg';

const AuthorBlock: FC = () => {
  return (
    <div className="author mx-auto flex  max-w-[75%] items-center">
      <div className="author__preview flex min-w-fit rounded-full border border-[#ededed] p-8">
        <div className="author__preview-box flex rounded-full shadow-[0px_5px_10px_0px_rgba(156,163,175,0.5)] max-w-[9.5rem]">
          <img
            className="rounded-full"
            loading="lazy"
            src={img.src}
            alt={'Photo of the author of the blog'}
          />
        </div>
      </div>
      <div className="author__descr pl-8">
        <div className="author__descr-name mb-5 font-inter text-[2rem] font-medium">
          Yo! I’m <span className="font-bold">Slava</span>
        </div>
        <div className="author__descr-bio mb-5">
          I am a front-end developer by day and a technical writer by night, who
          enjoys breaking down complex topics into comprehensible bits
          digestible to even 5-year-olds.
        </div>
        <div className="author__descr-socials flex gap-6">
          <GitIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
          <TgIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
          <SteamIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorBlock;
