import { StaticImageData } from "next/image";

export interface IUser {
  username: string;
  password: string;
}

export interface CarouselMockDataType{
  image_src: StaticImageData,
  project_name: string,
  project_url: string,
  status: string,
  warning: string
}