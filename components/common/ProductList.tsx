import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/fonts";
import ProductCard from "../common/ProductCard";
import { Product } from "@/types/ptypes";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => {
  return (
    <section className="max-w-[1440px] mx-auto text-center px-4">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          integralCF.className,
          "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize",
        ])}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((product) => (
            <div key={product.id} className="w-[315px]">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
        {viewAllLink && (
          <div className="w-full px-4 sm:px-0 text-center mt-8">
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
            >
              View All
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;
