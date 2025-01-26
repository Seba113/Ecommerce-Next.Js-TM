import { ProductType } from "@/types/product"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const {product} = props
    const router = useRouter()
    const {removeItem} = useCart()
    return (
        <li className="flex border-b py-6">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <Image  
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} 
                    alt="product" 
                    className="overflow-hidden w-24 h-24 rounded-md sm:w-auto sm:h-32"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">
                        {product.productName}
                    </h2>
                    <p className="font-bold">
                        {formatPrice(product.price)}
                    </p>
                </div>
            </div>
            <div>
                <button className={cn("rounded-full flex items-center justify-center dark:text-white border shadow-md p-1 hover:scale-110 transition")}>
                    <X size={20} onClick={() => removeItem(product.id)} />
                </button>
            </div>
        </li>
    )
}

export default CartItem