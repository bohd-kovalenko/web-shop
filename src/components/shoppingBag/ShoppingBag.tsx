import { FiShoppingBag } from "react-icons/fi";
import {Link} from "react-router-dom"
import useStore from "@/store/basket-store.ts";
import {Routes} from "@/constants";

type ShoppingBagProps = {
    className?: string
    footerView?: boolean
}

const ShoppingBag = ({className,footerView}:ShoppingBagProps) => {
    const {basket} = useStore();
    const shortNumber = basket.length > 9 ? '9+' : basket.length;

    return (
        <Link to={Routes.BASKET} className={`relative cursor-pointer flex flex-col items-center ${className}`}>
            <FiShoppingBag className={'w-6 h-auto'}/>
            <span className={`text-white select-none absolute bg-bag w-[22px] h-[22px] rounded-full text-sm  flex justify-center items-center border border-secondary ${footerView ? '-top-[7px] -right-[1px]' : '-top-[9px] -right-[9px]'}`}>{shortNumber}</span>
            {footerView && <>Basket</>}
        </Link>
    );
};

export default ShoppingBag;