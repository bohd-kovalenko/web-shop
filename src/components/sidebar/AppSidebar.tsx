import {Link,useLocation} from "react-router-dom";
import {Routes} from "@/constants";
import useSidebar from "@/store/sidebar-store.ts";
import {motion} from "framer-motion";
import {clsx} from "clsx";

export function AppSidebar() {
    const {open,setOpen} = useSidebar()
    const location = useLocation();
    const currentPath = location.pathname;
    const isHome = currentPath === Routes.HOME;
    const isCategory = currentPath === Routes.CATEGORY;
    const isBasket = currentPath === Routes.BASKET;

    return (
        <motion.div
            className={'hidden md:flex fixed h-full w-[200px] flex-col justify-center top-0 bg-darkGray z-40 pl-24 pr-5 pt-[50px] -left-[80px] shadow-xl border border-r-gray'}
            initial={{x: -300}}
            animate={{x: open ? 0 : -300}}
            transition={{duration: 0.5, type: 'spring', stiffness: 150, damping: 15}}
        >
            <ul className="mt-12 h-full items-start flex flex-col">
                <li className="py-2 mb-4 flex flex-col">
                    <Link to={Routes.HOME} onClick={()=>setOpen(!open)} className={clsx('hover:underline',
                        isHome ? 'underline' : ''
                    )}>
                        Home
                    </Link>
                </li>
                <li className="py-2 mb-4 flex flex-col">
                    <Link to={Routes.CATEGORY} onClick={()=>setOpen(!open)} className={clsx('hover:underline',
                        isCategory ? 'underline' : ''
                    )}>
                        Category
                    </Link>
                </li>
                <li className="py-2 mb-4 flex flex-col">
                    <Link to={Routes.BASKET} onClick={()=>setOpen(!open)} className={clsx('hover:underline',
                        isBasket ? 'underline' : ''
                    )}>
                        Basket
                    </Link>
                </li>
            </ul>
        </motion.div>
    )
}
