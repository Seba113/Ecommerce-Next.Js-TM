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
                <Link href="/category/hamburguesas" className="block">Hamburguesas</Link>
                <Link href="/category/embutidos" className="block">Embutidos</Link>
                <Link href="/category/otros" className="block">Otros</Link>
            </PopoverContent>
        </Popover>
    )
}