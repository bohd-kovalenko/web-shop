import {useState} from "react";
import useStore from "@/store/basket-store.ts";
import SingleShopItem from "@/components/shop-item/SingleShopItem.tsx";
import {Button} from "@/components/ui/button.tsx";
import BusketAnimation from "@/components/busket-animation.tsx";

const SingleItem = () => {
    const [selectedSize, setSelectedSize] = useState('M');
    const [isAnimating, setIsAnimating] = useState(false);
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const {selectedItem, basket, addToBasket} = useStore();
    const isItemInBasket = basket.some((item) => item.id === selectedItem?.id);

    const onAddToBasket = () => {
        const item = {
            id: selectedItem?.id,
            size: selectedSize,
            price: selectedItem?.price,
            name: selectedItem?.name,
            image: selectedItem?.image,
        }
        addToBasket(item);
        setIsAnimating(true);
    }

    return (
        <div className={'p-9 px-16 flex flex-col h-full '}>
            <div className={'flex justify-center w-full'}>
                <h1 className={'font-semibold text-lg'}>ID:{selectedItem?.id}</h1>
            </div>
            <div className={'min-h-[90vh] visible flex justify-center flex-col mt-2 md:flex-row'}>
                        <SingleShopItem elem={selectedItem}/>
                <div className={'w-full md:w-[35%] ml-16 flex flex-col justify-around'}>
                    <div className={'h-[20%] '}>
                        <h1 className={'font-semibold text-lg '}>Select size</h1>
                        <div className={'flex flex-wrap my-2'}>
                            {sizes.map((size, i) => (
                                <Button key={i}
                                        className={`mr-2 mb-2 flex-1 h-[2vw] min-w-[100px] min-h-[25px] ${size === selectedSize ? 'bg-neutral-100 text-neutral-900' : ''}`}
                                        variant={'outline'} onClick={() => setSelectedSize(size)}>{size}</Button>
                            ))}
                        </div>
                    </div>
                    <Button className={'w-full p-6 rounded-full bg-gray'} variant={'secondary'} onClick={onAddToBasket}
                            disabled={isItemInBasket}>
                        <BusketAnimation isAnimating={isAnimating}/>
                        Add to bag</Button>
                    <p>{selectedItem?.description}</p>
                    <p className={'ml-4'}>• Color: {selectedItem?.color}</p>
                    <p className={'ml-4'}>• Style: {selectedItem?.id}</p>
                    <p className={'ml-4'}>• Country/Region of Origin: {selectedItem?.country},{selectedItem?.region}</p>
                    <p className={'underline cursor-pointer'}>View Product Details</p>
                </div>
            </div>
        </div>

    );
};

export default SingleItem;