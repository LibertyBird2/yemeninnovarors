import Image from "next/image";

interface NewImageProps {
  src: string;
  alt: string;
}
const FramedImage: React.FC<NewImageProps> = ({ src, alt }) => {
  return (
    <div className="relative">
      <Image
        src="/images/frame.svg"
        className="absolute top-3 end-4 w-32 h-12 bg-gray-30"
        width={10}
        height={10}
        alt="frame"
      />
      {/* <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-tl-3xl"></div> */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl"></div>
      <Image src={src} alt={alt} width={1000} height={1000} loading="lazy" />
    </div>
  );
};

export default FramedImage;