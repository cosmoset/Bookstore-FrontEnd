import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

async function getProduct(id: number): Promise<Product | undefined> {
  try {
    const response = await fetch(`http://localhost:8001/api/getProduct/${id}`);
    if (!response.ok) {
      
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return undefined;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productData = await getProduct(Number(params.slug[0]));

  if (!productData?.title) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
    </main>
  );
}
