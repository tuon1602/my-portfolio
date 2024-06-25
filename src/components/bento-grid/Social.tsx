import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  url: string;
  image?: string;
  title?: string;
  icon?: ReactNode;
}

const Social: React.FC<IProps> = ({ url, image, title, icon }) => {
  return (
    <Link
      href={`${url}`}
      target="_blank"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {image && (
        <>
          {" "}
          <Image src={image} width={56} height={56} alt="cv-icon" />
          <p className="text-black heading-3 mt-2">{title}</p>
        </>
      )}
      {icon}
    </Link>
  );
};

export default Social;
