import {clsx} from "clsx"
import {Button} from "@/components/ui/button.tsx";
import Model1 from "@/assets/models/image 10.png";
import Model2 from "@/assets/models/image 11.png";
import {ElemItem} from "@/store/basket-store.ts";

type SliderCardProps = {
    elem: ElemItem
    isActive: boolean
}

const SliderCard = ({elem, isActive}: SliderCardProps) => {
    return (
        <div className={clsx('relative bg-secondary rounded-2xl flex duration-300 p-5 w-full overflow-hidden',
            isActive && 'shadow-activeSlider md:h-[200px]'
        )}>
            <div className={'w-1/2 flex flex-col'}>
                <h1 className={'font-bold text-xl ml-2'}>New Collection</h1>
                <p className={'text-gray-500'}>
                    Discount 25% for the first transaction
                </p>
                <Button variant={'primary'}>Shop Now</Button>
            </div>
                {
                    elem.image ?
                        <img src={elem.image} alt={elem.image} className={'h-full w-full top-0 left-0 absolute object-cover'}/> :
                        <div className={'w-1/2 h-full relative'}>
                            <img src={Model1} alt="model1" className={'absolute w-full h-auto -top-[20px] '}/>
                            <img src={Model2} alt="model2"
                                 className={'absolute w-full h-auto -top-[10px] -right-[100px] '}/>
                        </div>
                }
        </div>
    );
};

export default SliderCard;