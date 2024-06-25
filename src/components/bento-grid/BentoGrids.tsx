import React from "react";
import Transition from "../Transition";
import { Github, Facebook, Download, HandCoins } from "lucide-react";
import Link from "next/link";
import CVIcon from "/public/assets/images/cv.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import TeckStack from "./TechStack";
import { Button } from "../ui/button";
import DuckGenerator from "./DuckGenerator";
import Social from "./Social";
import myAvatar from "/public/assets/images/trau.jpg";
import HoverEffect from "../HoverEffect";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getDuck } from "@/app/actions/getAnimals";
import Projects from "./Projects";
import MailerForm from "./MailerForm";

const BentoGrids = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["duck"],
    queryFn: getDuck,
  });
  const t = await getTranslations("Index");
  return (
    <Transition>
      <section className="grid grid-cols-12 grid-rows-12 gap-4 min-h-screen">
        <div className="col-span-12 md:col-span-6 xl:col-span-6 row-span-0 xl:row-span-3 border border-border rounded-2xl py-5 px-10">
          <h1 className="heading-4 md:heading-3 xl:heading-2">{t("about-title")}</h1>
          <p className="text-pretty md:paragraph paragraph-mobile text-muted-foreground">
            {t("about-content")}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 row-span-0 xl:row-span-3 border border-border rounded-2xl flex justify-center items-center">
          <TeckStack />
        </div>
        <HoverEffect classname="col-span-12 md:col-span-6 xl:col-span-2 xl:row-span-3 rounded-2xl bg-[#FFDF6F]">
          <Social
            url="https://drive.google.com/file/d/1VmhYAZIlbLOo0EAm_BTkHzWGnVIQUL9Z/view"
            title={t("cv-title")}
            image={CVIcon.src}
          />
        </HoverEffect>
        <div className="col-span-12 md:col-span-6 xl:col-span-3 xl:row-span-4 border border-border rounded-2xl">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DuckGenerator />
          </HydrationBoundary>
        </div>
        <div className="relative col-span-12 xl:col-span-3 xl:row-span-4 border border-border rounded-2xl">
          <Image src={myAvatar} alt="avatar" fill className="rounded-2xl md:aspect-[3/4] object-cover" />
        </div>
        <div className="col-span-12 xl:col-span-6 xl:row-span-6 border border-border  rounded-2xl">
          <Projects />
        </div>
        <div className="col-span-12 xl:col-span-6 xl:row-span-5 border border-border  rounded-2xl">
          <MailerForm />
        </div>
        <HoverEffect classname="col-span-12 md:col-span-6 xl:col-span-2 xl:row-span-3 bg-primary rounded-2xl">
          <Social
            url="https://github.com/tuon1602"
            icon={<Github className="text-secondary w-14 h-14" />}
          />
        </HoverEffect>
        <HoverEffect classname="col-span-12 md:col-span-6 xl:col-span-2 xl:row-span-3 bg-[#1877F2] rounded-2xl">
          <Social
            url="https://www.facebook.com/TuonNguyen1602"
            icon={<Facebook className="text-white w-14 h-14" />}
          />
        </HoverEffect>
        <HoverEffect classname="col-span-12 md:col-span-6 xl:col-span-2 xl:row-span-3 bg-red-400 rounded-2xl">
          <Social
            url="/donation"
            icon={<HandCoins className="text-white w-14 h-14" />}
          />
        </HoverEffect>
      </section>
    </Transition>
  );
};

export default BentoGrids;
