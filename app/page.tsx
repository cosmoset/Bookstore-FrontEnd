import Link from "next/link";
import Image from "next/image";
import { LandingHero } from "@/pages/welcome";
import { TestimonialsSectionDemo } from "@/All Components /testimony";
import  LandingPageClient  from "@/pages/landing"
import NavHeader from "@/All Components /nav-header"
import { Footer7 } from "@/All Components /footer";
import { InteractiveCheckoutDemo } from "@/All Components /cart";


export default async function Home() {
  return (
  <LandingPageClient>
    <NavHeader/>
    <LandingHero/>
    <TestimonialsSectionDemo/>
    <Footer7/>
  </LandingPageClient>
    );
}
