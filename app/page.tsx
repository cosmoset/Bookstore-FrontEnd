import Link from "next/link";
import Image from "next/image";
import { LandingHero } from "@/pages/welcome";
import { TestimonialsSectionDemo } from "@/All Components /testimony";
import  LandingPageClient  from "@/pages/landing"
import NavHeader from "@/components/ui/nav-header"

export default async function Home() {
  return (
    <>
    <LandingPageClient>
      <NavHeader/>
      <LandingHero/>
     <TestimonialsSectionDemo/>
    </LandingPageClient>
    </>
    
  

  );
}
