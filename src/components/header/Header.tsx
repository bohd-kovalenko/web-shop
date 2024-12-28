import ShoppingBag from "@/components/shoppingBag/ShoppingBag.tsx";
import {IoMenu} from "react-icons/io5";
import useSidebar from "@/store/sidebar-store.ts";
import Location from "@/components/location/Location.tsx";


const Header = () => {
    const {open, setOpen} = useSidebar()

    return (
        <header className={'flex p-3 bg-secondary items-center justify-between h-[75px] md:h-[50px] fixed w-full z-50'}>
            <div className={'flex items-center'}>
                <IoMenu className={'w-6 h-fit cursor-pointer hidden md:flex'} onClick={() => setOpen(!open)}/>
                <Location/>
            </div>
            <div className={'hidden md:flex'}>
                <ShoppingBag/>
            </div>
        </header>
    );
};

export default Header;