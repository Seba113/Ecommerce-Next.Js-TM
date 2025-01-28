"use client"
import { useGetCategories } from '@/api/getProducts'
import Link from 'next/link'
import { ResponseType } from '@/types/response'
import { CategoryType } from '@/types/category';



export function ChooseCategory() {
    const {result, loading}: ResponseType = useGetCategories();
    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elegí tu categoría favorita</h3>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => (
                        <Link 
                            key={category.id} 
                            href={`/category/${category.slug}`}
                            className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded'
                        >
                            <img 
                                src={`${category.image.url}`} 
                                alt={category.categoryName} 
                                className='max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-105'
                            />
                            <p className='absolut w-full font-bold text-center py-2 text-lg light:text-black dark:text-white bottom-5 backdrop-blur-lg'>
                                {category.categoryName}
                            </p>
                        </Link>    
                    )

                    )
                )}
            </div>
        </div>
    ) 
}