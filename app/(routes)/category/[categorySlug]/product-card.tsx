import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { IconButton } from "@/components/ui/icon-button"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Expand, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

type ProductTypeProps = {
    product: ProductType
}

const ProductCard = (props: ProductTypeProps) => {
    const {product} = props;
    const router = useRouter()
    return(
        <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <Carousel 
                opts={{align: "start"}}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt={image.name} className="rounded-xl mx-auto"/>
                            <div className="absolute w-full transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.slug}`) } icon={<Expand size={20} className="text-gray-600 " />} />
                                    <IconButton onClick={() => console.log("product")} icon={<ShoppingCart size={20} className="text-gray-600" />} />
                                </div>
                            </div>
                            
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
            </Carousel>
            <p className="text-1xl text-center">{product.productName}</p>
            <p className="font-bold text-center">${formatPrice(product.price)}</p>
        </Link>
    )
}

export default ProductCard