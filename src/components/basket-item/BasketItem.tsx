import ShopImage from "@/components/shopImage/ShopImage.tsx";
import { IoMdClose } from "react-icons/io";
import  {ElemItem} from "@/store/basket-store.ts";

type BasketItem = {
    elem: ElemItem;
    onRemove: () => void;
}

const BasketItem = ({elem,onRemove}:BasketItem) => {

    return (
        <div className={'flex mt-8 justify-between w-full items-center'}>
            <ShopImage src={elem.image} className={'rounded-sm h-full w-[150px] min-h-[100px] md:w-[200px] md:min-h-[150px]'}/>
            <div className={'ml-8 h-full flex flex-col justify-between w-full'}>
                <p className={'text-sm md:text-lg font-medium'}>{elem.name}</p>
                <p className={'text-sm md:text-lg font-medium'}>TraceID: {elem.id}</p>
                <p className={'text-sm md:text-lg font-medium'}>Size: {elem.size}</p>
                <p className={'text-sm md:text-lg font-medium'}>Price: {elem.price}</p>
                <p className={'text-sm md:text-lg font-medium'}>Quantity: 1</p>
            </div>
            <IoMdClose className={'w-auto h-10 ml-16 cursor-pointer'} onClick={onRemove}/>
        </div>
    );
};

export default BasketItem;