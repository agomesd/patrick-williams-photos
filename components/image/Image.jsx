import Image from "next/image";

const ResponsiveImage = ({ src, alt, height, width, layout }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} layout={layout} />
  );
};

export default ResponsiveImage;
