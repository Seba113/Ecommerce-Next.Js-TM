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
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                };
            };
        }
    
}