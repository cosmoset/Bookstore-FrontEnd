import Link from "next/link";
import Image from "next/image";
import { LandingHero } from "@/pages/welcome";
import { TestimonialsSectionDemo } from "@/All Components /testimony";
import  LandingPageClient  from "@/pages/landing"
import NavHeader from "@/All Components /nav-header"
import { Footer7 } from "@/All Components /footer";
import InteractiveCheckoutDemo from "@/app/cart/page";
import Showbiz from "./dona/page";


export default async function Home() {
  return (
  <LandingPageClient>
    <NavHeader/>
    <LandingHero/>
    <Showbiz/>
    <TestimonialsSectionDemo/>
    <Footer7/>
  </LandingPageClient>
    );
}
