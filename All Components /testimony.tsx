import { TestimonialsSection } from "@/components/uis/testimony/testimonials-with-marquee"


const testimonials = [
  {
    author: {
      name: "Aron Tsegaye",
      handle: "@Abebe",
      avatar: "https://thumbs.dreamstime.com/b/portrait-ethiopian-man-oromia-ethiopia-april-unidentified-thick-glasses-outside-his-home-oromia-65442758.jpg"
    },
    text: "I was amazed by the variety of books available! I found everything from popular bestsellers to rare indie titles",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "Mahder Assefa",
      handle: "@Samri",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrG2tegAw77uji1VDAfbJPfi_d386PtIjHA&s"
    },
    text: "Their catalog includes everything from bestsellers to niche genres. I was particularly impressed with their collection of independent authors, which is often hard to find elsewhere.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Meron Kebede",
      handle: "@Nebiyou23",
      avatar: "https://i.pinimg.com/736x/6b/2d/83/6b2d838b4219732700f773e1d60f7c4f.jpg"
    },
    text: "Customer service is responsive and helpful. I had a minor issue with my order, and they resolved it quickly and efficiently."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Thousands"
      description="At Bookify, we value the opinions of our readers! Our customers frequently share their experiences, helping fellow book lovers make informed choices."
      testimonials={testimonials}
    />
  )
}