import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import NavHeader from "@/All Components /nav-header"
const product = 
    {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing"
};



export default function ProductCard() {
  return (
    <>
    <NavHeader/>
    <div className="w-[300px] group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <Image
          className="w-full rounded-lg aspect-square"
          src={product.image}
          width={300}
          height={500}
          alt={product.name}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <Link href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-lg font-semibold">{product.price}</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <HeartIcon className="size-4" />
        </Button>
        <Button variant="outline" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
    </>
  );
}
