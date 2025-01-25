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
                <Link href="/category/harrypotter" className="block">Harry Potter</Link>
                <Link href="/category/marvel" className="block">Marvel</Link>
                <Link href="/category/anime" className="block">Anime</Link>
            </PopoverContent>
        </Popover>
    )
}