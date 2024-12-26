export type ProductType = {
    id: number;
    
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        price: number;
        images: {
                id: number,
                url:string,
                name:string
        }[]
        ;
        category: {
                slug: string;
                categoryName: string;
        }
    
}