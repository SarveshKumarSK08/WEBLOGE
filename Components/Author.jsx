import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute right-0 left-0 -top-14 flex justify-center items-center">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author[0].name}
        height="100"
        width="100"
        className="align-middle rounded-full"
        src={author[0].photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author[0].name}</h3>
    <p className="text-white text-ls">{author[0].bio}</p>
  </div>
);

export default Author;