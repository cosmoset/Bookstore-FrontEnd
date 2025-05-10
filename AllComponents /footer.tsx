import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Bookify",
  },
}: Footer7Props) => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-6 max-w-xs">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              A collection of 100+ books for your to
              enjoy and learn.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="hover:text-primary">
                <a href="#">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="hover:text-primary">
                <a href="#">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="hover:text-primary">
                <a href="#">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="hover:text-primary">
                <a href="#">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20 w-full max-w-2xl">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center lg:text-left">
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 border-t pt-8 text-sm text-muted-foreground lg:flex-row lg:justify-between">
          <p>© 2025 Bookify. All rights reserved.</p>
          <ul className="flex gap-4">
            <li className="hover:text-primary">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="hover:text-primary">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };