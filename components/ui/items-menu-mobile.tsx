import { PopoverContent, PopoverTrigger, Popover } from "./popover"
import { Menu } from "lucide-react"
import Link from "next/link"


export const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/hamburguesas" className="block">Hamburguesas</Link>
                <Link href="/categories/embutidos" className="block">Embutidos</Link>
                <Link href="/categories/otros" className="block">Otros</Link>
            </PopoverContent>
        </Popover>
    )
}