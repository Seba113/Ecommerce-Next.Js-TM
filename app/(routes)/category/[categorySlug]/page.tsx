"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams, useRouter } from "next/navigation"
import { ResponseType } from "@/types/response"
import { Separator } from "@/components/ui/separator"


export default function Page() {
    const params = useParams()
    const {categorySlug} = params
    const {result, loading, error}: ResponseType = useGetCategoryProduct(categorySlug)
    const router = useRouter()
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading &&(
                <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
            )}
            <Separator className="m-1"/>
            <div>
                
            </div>

        </div>
    )
}