import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import classNames from "classnames";

type BgImageProps = {
  className?: string;
  imgSrc: string | StaticImport;
};

const BgImage: FC<BgImageProps> = ({ className, imgSrc }) => {
  return (
    <div
      className={classNames(
        "fixed h-screen w-screen -z-10 overflow-hidden not-prose",
        className
      )}
    >
      <Image
        className="w-screen object-cover brightness-90"
        alt="Sound images background"
        src={imgSrc}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        quality={70}
        fill
        sizes="100vw"
      />
    </div>
  );
};

export default BgImage;
