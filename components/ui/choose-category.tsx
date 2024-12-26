"use client"
import { useGetCategories } from '@/api/getProducts'
import Link from 'next/link'
import { ResponseType } from '@/types/response'



export function ChooseCategory() {
    const {result, loading, error}: ResponseType = useGetCategories();
    console.log(result)
    return (
        <p>{}</p>
    )
}