import Link from "next/link";
import Image from "next/image";
import { LandingHero } from "@/pages/welcome";
import { TestimonialsSectionDemo } from "@/All Components /testimony";
import  LandingPageClient  from "@/pages/landing"
import { HomeDemo } from "@/All Components /Navbar";

export default async function Home() {
  return (
    <LandingPageClient>
      <HomeDemo/>
      <LandingHero/>
      <TestimonialsSectionDemo/>
    </LandingPageClient>
    
  

  );
}
