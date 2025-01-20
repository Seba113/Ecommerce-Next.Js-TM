"use client"
import { useRouter} from "next/navigation"
import { ShoppingCart, Heart, User, BaggageClaim } from "lucide-react"
import { MenuList } from "./menu-list"
import { ItemsMenuMobile } from "./items-menu-mobile"
import { ToggleTheme } from "./toggle-theme"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
export const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const {lovedItems} = useLovedProducts()

    return (
        <div className="flex items-center justify-between p-4 cursor-pointer sm:max-w-4xl mx-auto md:max-w-6xl">
            <h2 className="text-3xl" onClick={() => router.push("/")}>Tasty 
                <span className="font-bold">Market</span>
            </h2>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>

            <div className="flex items-center justify-content gap-2 sm:gap-7">
                {cart.items.length === 0 ?
                <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} /> 
                : (
                    <div className="flex gap-1" onClick={() => router.push("/cart")}>
                        <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                        <span>{cart.items.length}</span>

                    </div>
                )}
                <Heart  
                    strokeWidth="1" 
                    className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} 
                    onClick={() => router.push("/loved-products")}/>
                <ToggleTheme />
            </div>
        </div>
    )
}