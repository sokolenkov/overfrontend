import { FC } from 'react';
import Image, { ImageLoaderProps } from 'next/image';

const loader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
  return src;
};

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Img: FC<Props> = (props) => {
  return process.env.NODE_ENV === 'development' ? (
    <Image unoptimized={true} {...props} />
  ) : (
    <Image {...props} loader={loader} />
  );
};

export default Img;
