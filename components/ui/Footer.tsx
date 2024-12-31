import Link from "next/link"
import { Separator } from "./separator"

export const Footer = () => {
    return (
            <footer className="mt-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md-py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p>
                            <span className="font-bold mr-2">
                                TastyMarket
                            </span>
                        </p>
                    </div>
                    <Separator className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        &copy; 2024
                        <Link href="#"><strong>Made By: </strong>Sebastian Fernandez</Link>
                    </span>
                
                </div>
            </footer>
    )
}