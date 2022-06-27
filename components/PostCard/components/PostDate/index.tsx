import React from 'react';

import { getDayStrFromTstamp, getMonthStrFromTstamp } from 'utils/funcs';

const PostDate = () => {
  return (
    <div
      className="post-card__date absolute top-0 left-0 flex h-[100%] w-[100%] flex-col items-center justify-center
        text-center duration-300 ease-in group-hover:translate-y-[-100%]"
    >
      <span className="post-card__date__num block text-[5rem] font-bold leading-[100%]">
        {/* {getDayStrFromTstamp(date)} */} 18
      </span>
      <span className="post-card__date__dec mt-3 block text-sm">
        {/* {getMonthStrFromTstamp(date)} */} Jun
      </span>
    </div>
  );
};

export default PostDate;
