import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { SparklesText } from "@/components/layout/Hero/sparkletitle";

const data: NavMenu = [
  {
    id: 1,
    label: "Books",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Fiction",
        url: "/books#fiction",
        description: "Novels, short stories, and literary works",
      },
      {
        id: 12,
        label: "Non-Fiction",
        url: "/books#non-fiction",
        description: "Biographies, history, science, and more",
      },
      {
        id: 13,
        label: "Children's Books",
        url: "/books#children",
        description: "Picture books, early readers, and young adult",
      },
      {
        id: 14,
        label: "Textbooks & Education",
        url: "/books#textbooks",
        description: "Academic resources for all levels",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Bestsellers",
    url: "/books#bestsellers",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Releases",
    url: "/books#new-releases",
    children: [],
  },
  {
    id: 4,
    type: "MenuList",
    label: "Genres",
    children: [
      {
        id: 41,
        label: "Mystery & Thriller",
        url: "/genres#mystery",
      },
      {
        id: 42,
        label: "Science Fiction & Fantasy",
        url: "/genres#scifi",
      },
      {
        id: 43,
        label: "Romance",
        url: "/genres#romance",
      },
      {
        id: 44,
        label: "History & Biography",
        url: "/genres#history",
      },
    ],
  },
  {
    id: 5,
    type: "MenuItem",
    label: "Authors",
    url: "/authors",
    children: [],
  },
  {
    id: 6,
    type: "MenuItem",
    label: "About us",
    url: "/about",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            <SparklesText text="Bookify" />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/login" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
