import {Separator} from "@/components/ui/separator"
import {Link, useLocation} from "react-router-dom";
import {Routes} from "@/constants";
import {FiHome} from "react-icons/fi";
import {IoGridOutline} from "react-icons/io5";
import ShoppingBag from "@/components/shoppingBag/ShoppingBag.tsx";
import {clsx} from "clsx";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const location = useLocation();
    const currentPath = location.pathname;
    const isHome = currentPath === Routes.HOME;
    const isCategory = currentPath === Routes.CATEGORY;
    const isBasket = currentPath === Routes.BASKET;

    return (
        <footer className={'flex p-3 bg-secondary items-center h-[75px] md:h-[50px] shadow-footer md:shadow-none justify-between fixed bottom-0 w-full md:static'}>
            <p className={'hidden md:flex'}>&copy; {year}, <span className={'underline mx-1'}>web-shop.com</span> All
                Rights Reserved.</p>
            <div className={'hidden md:flex'}>
                <div className={'flex'}>
                    <p className={'mx-2 cursor-pointer hover:opacity-70'}>Privacy Notice</p>
                    <Separator orientation={"vertical"}/>
                </div>
                <div className={'flex'}>
                    <p className={'mx-2 cursor-pointer hover:opacity-70'}>Condition of use</p>
                    <Separator orientation={"vertical"}/>
                </div>
                <div className={'flex'}>
                    <p className={'mx-2 cursor-pointer hover:opacity-70'}>Terms and Condition</p>
                </div>
            </div>
            <div className={'w-full flex md:hidden'}>
                <ul className="w-full h-full flex justify-evenly">
                    <li>
                        <Link to={Routes.HOME} className={clsx('flex flex-col items-center',
                            isHome ? 'text-black' : 'text-gray')}>
                            <FiHome className={'w-6 h-auto'}/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={Routes.CATEGORY} className={clsx(`flex flex-col items-center`,
                            isCategory ? 'text-black' : 'text-gray')}>
                            <IoGridOutline className={'w-6 h-auto'}/>
                            Category
                        </Link>
                    </li>
                    <li>
                        <ShoppingBag className={isBasket ? 'text-black' : 'text-gray'} footerView/>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;