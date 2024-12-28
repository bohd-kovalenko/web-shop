import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ElemItem = {
    id?: string,
    size?: string,
    price?: number,
    name?: string,
    quantity_of_ratings?: number,
    rating_avg?: number,
    image?: string,
    description?: string,
    color?: string,
    country?: string,
    region?: string,
}

type State = {
    selectedItem: ElemItem | null,
    setSelectedItem: (item: ElemItem) => void,
    basket: ElemItem[],
    addToBasket: (item: ElemItem) => void,
    removeFromBasket: (id: string | number | undefined) => void,
}

const useStore = create<State>()(
    persist(
        (set) => ({
            selectedItem: null,
            basket: [],
            setSelectedItem: (item) => set({ selectedItem: item }),
            addToBasket: (item) => set((state) => ({ basket: [...state.basket, item] })),
            removeFromBasket: (id) => set((state) => ({
                basket: state.basket.filter((item) => item.id !== id),
            })),
        }),
        {
            name: 'basket-store',
        }
    )
);

export default useStore;
