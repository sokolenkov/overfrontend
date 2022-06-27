import { Img } from 'components';
import img from 'assets/images/author.jpg';

const PostPreview = () => {
  return (
    <div className="post-card__img-box absolute top-0 left-0 translate-y-full duration-300 ease-in group-hover:translate-y-0">
      {/* <img
        className="post-card__img object-cover"
        loading="lazy"
        src={img.src}
      /> */}
      <Img src={img.src} width={160} height={160} alt={'alt'} />
    </div>
  );
};

export default PostPreview;
