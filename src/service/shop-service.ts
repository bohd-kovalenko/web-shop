import api from "./api.ts"
import {ElemItem} from "@/store/basket-store.ts";

interface ShopElement {
    acf:ElemItem
}

export class ShopService {
    public async getAllElements() {
        try {
            const response = await api.get<ShopElement[]>('/shop-element', {
                params: {acf_format: 'standard'},
            });

            const elements = response?.data.map((item: ShopElement) => {
                return item.acf
            })

            return elements
        } catch (error) {
            console.error('Error fetching shop elements:', error);
            throw error;
        }
    }
};