import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TypewriterEffect } from "@/components/ui/type-writer";
import BentoGrids from "@/components/bento-grid/BentoGrids";

export default async function Home() {
  const t = await getTranslations("Index");
  const welcomeT = await getTranslations("Welcome");
  const myWords = [
    {
      text: welcomeT("01"),
    },
    {
      text: welcomeT("02"),
    },
    {
      text: welcomeT("03"),
    },
    {
      text: welcomeT("04"),
      className:"text-blue-500 dark:text-pink-400"
    },
  ];
  return (
    <>
      {" "}
      <main className="container space-y-10 pt-10">
        <TypewriterEffect className="text-6xl" words={myWords} />
        <BentoGrids />
      </main>
    </>
  );
}
