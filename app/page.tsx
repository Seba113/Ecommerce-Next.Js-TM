import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/ui/featured-products";
import { ChooseCategory } from "@/components/ui/choose-category";





export default function Home() {
  return (
    <main>
      <FeaturedProducts />
      <ChooseCategory />
    </main>
  );
}
