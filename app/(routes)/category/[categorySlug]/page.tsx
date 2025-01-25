"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams, useRouter } from "next/navigation"
import { ResponseType } from "@/types/response"
import { Separator } from "@/components/ui/separator"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import ProductCard from "./product-card"
import { ProductType } from "@/types/product"



export default function Page() {
    const params = useParams()
    const {categorySlug} = params
    const {result, loading}: ResponseType = useGetCategoryProduct(categorySlug)
    //const router = useRouter()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading &&(
                <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
            )}
            <Separator className="m-1"/>
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                {loading && (
                    <SkeletonSchema grid={3} />
                )}
                {result !== null && !loading && (
                    result.map((product : ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                    
                )}
                
            </div>

        </div>
    )
}