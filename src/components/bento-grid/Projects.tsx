"use client";

import React, { Fragment, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselMockdata } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { CarouselMockDataType } from "@/types";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Index");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [myCarousel, setMyCarousel] = useState<CarouselMockDataType>();
  useMemo(() => {
    const temp = CarouselMockdata.find((carousel, index) => current === index);
    setMyCarousel(temp);
  }, [current]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent className="">
          {CarouselMockdata.map((item, index) => (
            <>
              <CarouselItem key={index} className="aspect-[16/8] relative">
                <Link href={item.project_url} target="_blank">
                  <Image
                    src={item.image_src}
                    alt={item.project_name}
                    fill
                    className="object-fill"
                  />
                </Link>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-1/2 -translate-x-1/2 bottom-0 " />
      <CarouselNext className="-bottom-0 left-0 -translate-x-0"/> */}
      </Carousel>
      <div className="flex flex-col items-center py-2 space-y-2">
        <p className="heading-3">{myCarousel?.project_name}</p>
        <p className="border dark:border-pink-200 border-pink-500 p-2 rounded-2xl">
          {t("status-text")}: <span>{t(`${myCarousel?.status}`)}</span>
        </p>
      </div>
    </>
  );
};

export default Projects;
