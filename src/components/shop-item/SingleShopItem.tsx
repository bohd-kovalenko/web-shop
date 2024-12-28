import ShopImage from "@/components/shopImage/ShopImage.tsx";
import {IoStar} from "react-icons/io5";
import {ElemItem} from "@/store/basket-store.ts";

type SingleShopItem = {
    elem:ElemItem | null
}

const SingleShopItem = ({elem}:SingleShopItem) => {
    return (
        <div className={'sticky h-fit top-[50px] pt-9 visible z-10 '}>
            <p className={'font-semibold text-lg'}>{elem?.name}</p>
            <p className={'font-medium'}>${elem?.price}</p>
            <div className={'bg-darkGray rounded-xl p-2'}>
                <ShopImage src={elem?.image} size={'large'} />
            </div>
            <div>
                <div className={'flex items-center'}>
                    <IoStar className={'fill-amber-500 text-amber-500 mr-1'}/> <p className={'font-medium'}>{elem?.rating_avg} <span
                    className={'ml-1 font-normal text-gray-500'}>({elem?.quantity_of_ratings} Reviews)</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleShopItem;