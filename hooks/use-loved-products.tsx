import {create} from 'zustand';
import{persist, createJSONStorage} from 'zustand/middleware';
import { ProductType } from '@/types/product';
import { toast } from './use-toast';

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLovedItem: (product: ProductType) => void;
    removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLovedItem: (product: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === product.id);
        if(existingItem){
            return toast({
                title: 'El producto ya está en la lista de favoritos',
                variant: 'destructive'
            });
        }
        set({
            lovedItems: [...get().lovedItems, product]
        })
        toast({
            title: 'Producto añadido a la lista de favoritos ❤️',
        })
    },
    removeLovedItem: (id: number) => {
        set({lovedItems: [...get().lovedItems.filter((product) => product.id !== id)]})
        toast({
            title: "El producto se elimino correctemente"
        })
    }



}),{
    name: 'loved-products-storage',
    storage: createJSONStorage(() => localStorage)
}))