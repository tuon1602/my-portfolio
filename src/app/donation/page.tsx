import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import QrDonation from "/public/assets/images/qr_donate.jpg";
import { getTranslations } from "next-intl/server";

const DonationPage = async () => {
  const t = await getTranslations("Donation");
  return (
    <div className="flex flex-col items-center gap-10 max-w-2xl m-auto">
      <h1 className="xl:heading-1 lg:heading-2 heading-3">{t("title")}</h1>
      <Accordion type="multiple" className="max-w-2xl w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("vn-qr-title")}</AccordionTrigger>
          <AccordionContent>
            <Image
              src={QrDonation}
              alt="vietnamese qr"
              className="aspect-[3/4] w-full"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Paypal</AccordionTrigger>
          <AccordionContent>{t("paypal-qr-description")}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DonationPage;
