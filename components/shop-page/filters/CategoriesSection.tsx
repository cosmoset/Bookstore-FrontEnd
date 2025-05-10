import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Fiction",
    slug: "/shop?genre=fiction",
  },
  {
    title: "Non-Fiction",
    slug: "/shop?genre=non-fiction",
  },
  {
    title: "Mystery",
    slug: "/shop?genre=mystery",
  },
  {
    title: "Fantasy",
    slug: "/shop?genre=fantasy",
  },
  {
    title: "Science Fiction",
    slug: "/shop?genre=science-fiction",
  },
  {
    title: "Biography",
    slug: "/shop?genre=biography",
  },
  {
    title: "Children's Books",
    slug: "/shop?genre=children",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
