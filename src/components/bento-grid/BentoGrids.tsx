"use client";

import React from "react";
import { motion } from "framer-motion";
import Transition from "../Transition";
import { Github, Facebook, Download } from "lucide-react";
import Link from "next/link";
import CVIcon from "/public/assets/images/cv.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TeckStack from "./TechStack";

const BentoGrids = () => {
  const t = useTranslations("Index");
  return (
    <Transition>
      <section className="grid grid-cols-12 grid-rows-12 gap-4 min-h-[100dvh]">
        <div className="col-span-6 row-span-3 border border-border rounded-2xl py-5 px-10">
          <h1 className="heading-2 ">{t("about-title")}</h1>
          <p className="text-pretty paragraph text-muted-foreground">
            {t("about-content")}
          </p>
        </div>
        <div className="col-span-4 row-span-3 border border-border rounded-2xl flex justify-center">
          <TeckStack/>
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="col-span-2 row-span-3 rounded-2xl bg-[#FFDF6F]"
        >
          <Link
            href="https://drive.google.com/file/d/1VmhYAZIlbLOo0EAm_BTkHzWGnVIQUL9Z/view"
            target="_blank"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <Image src={CVIcon} width={56} height={56} alt="cv-icon" />
            <p className="text-black heading-3 mt-2">{t("cv-title")}</p>
          </Link>
        </motion.div>
        <div className="col-span-3 row-span-4 border border-border rounded-2xl">
          project 1
        </div>
        <div className="col-span-3 row-span-4 border border-border  rounded-2xl">
          project 2
        </div>
        <div className="col-span-3 row-span-6 border border-border  rounded-2xl">
          personal image
        </div>
        <div className="col-span-3 row-span-6 border border-border  rounded-2xl">
          experience
        </div>
        <div className="col-span-6 row-span-5 border border-border  rounded-2xl">
          contact
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="col-span-2 row-span-3 bg-primary rounded-2xl"
        >
          <Link
            href="https://github.com/tuon1602"
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            <Github className="text-secondary w-14 h-14" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="col-span-2 row-span-3 dark:bg-[#1877F2] bg-[#98CFFF] bg-primary rounded-2xl"
        >
          <Link
            href="https://www.facebook.com/TuonNguyen1602"
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            <Facebook className="text-white w-14 h-14" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="col-span-2 row-span-3  rounded-2xl"
        >
          <Link
            href="https://github.com/tuon1602"
            target="_blank"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            spotify
          </Link>
        </motion.div>
      </section>
    </Transition>
  );
};

export default BentoGrids;
