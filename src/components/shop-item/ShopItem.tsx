import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {Routes} from "@/constants";
import ShopImage from "@/components/shopImage/ShopImage.tsx";
import useStore, {ElemItem} from "@/store/basket-store.ts";

type ShopItem= {
    className?: string;
    elem: ElemItem;
}

const ShopItem = ({className,elem}:ShopItem) => {
    const navigate = useNavigate();
    const {setSelectedItem} = useStore();

    const goToItemPage = () => {
        setSelectedItem(elem);
        navigate(Routes.SINGLE_ITEM + `/${elem.id}`);
    }


    return (
        <div className={`m-3 hover:-translate-y-2 cursor-pointer flex-1 transform transition-transform duration-300 ${className}`} onClick={goToItemPage}>
            <div className={'bg-darkGray rounded-xl p-2'}>
            <ShopImage src={elem.image} size={'medium'}/>
            </div>
            <div>
                <p>{elem.name}</p>
                <div className={'flex items-center'}>
                    <IoStar className={'fill-amber-500 text-amber-500 mr-1'}/> <p className={'font-medium'}>{elem.rating_avg} <span className={'ml-1 font-normal text-gray-500'}>({elem.quantity_of_ratings} Reviews)</span></p>
                </div>
                <p>${elem.price}</p>
            </div>
        </div>
    );
};

export default ShopItem;