"use client"
import { useRouter} from "next/navigation"
import { ShoppingCart, Heart, User } from "lucide-react"
import { MenuList } from "./menu-list"
import { ItemsMenuMobile } from "./items-menu-mobile"


export const Navbar = () => {
    const router = useRouter()

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
                <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
                <Heart  strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/loved-products")}/>
                <User strokeWidth="1" className="cursor-pointer" />
            
            </div>
        </div>
    )
}