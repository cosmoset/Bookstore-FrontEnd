import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type Booklangz = {
  title: string;
  slug: string;
};

const BookslangData: Booklangz[] = [
  {
    title: "English",
    slug: "/shop?style=English",
  },
  {
    title: "Amharic",
    slug: "/shop?style=Amharic",
  },
  {
    title: "Arabic",
    slug: "/shop?style=arabic",
  },
  {
    title: "Geez",
    slug: "/shop?style=geez",
  },
];

const BookStyleSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Book Language
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {BookslangData.map((bstyle, idx) => (
              <Link
                key={idx}
                href={bstyle.slug}
                className="flex items-center justify-between py-2"
              >
                {bstyle.title} <MdKeyboardArrowRight />
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BookStyleSection;
