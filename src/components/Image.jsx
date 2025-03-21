import { IKImage } from "imagekitio-react";

const Image = ({ src, classname, alt, width, height }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      // path="/logo.png"
      src={src}
      className={classname}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
export default Image;
