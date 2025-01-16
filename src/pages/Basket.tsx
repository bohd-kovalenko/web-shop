import BasketItem from "@/components/basket-item/BasketItem.tsx";
import useStore from "@/store/basket-store.ts";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";

const Basket = () => {
    const { basket, removeFromBasket } = useStore();

    const goods = basket.reduce((total, item) => total + parseFloat(item.price), 0);
    const delievery = Math.floor(Math.random() * 3) + 4;
    const total = parseFloat((goods + delievery).toFixed(2));

    return (
        <div className={'py-9 px-3 md:p-9 flex flex-col items-center h-full'}>
            <div className={'flex justify-center w-full'}>
                <h1 className={'font-semibold text-lg'}>Basket</h1>
            </div>
            <div className={'min-h-[50vh] w-full md:w-1/2 h-full flex flex-col justify-center items-center'}>
                {
                    basket.length === 0 ? (
                        <p className={'text-lg font-medium'}>Basket is empty</p>
                    ) : (
                        basket.map((elem) => (
                            <BasketItem
                                elem={elem}
                                key={elem.id}
                                onRemove={() => removeFromBasket(elem.id)}
                            />
                        ))
                    )
                }
                {
                    basket.length !== 0 && (
                        <div className={'w-full mt-20 md:mt-10'}>
                            <h1 className={'font-semibold text-xl mb-10'}>Order Amount</h1>
                            <div className={'flex justify-between'}>
                                <p className={'font-medium mb-1'}>Goods:</p>
                                <p className={'font-medium mb-1'}>${goods.toFixed(2)}</p>
                            </div>
                            <div className={'flex justify-between'}>
                                <p className={'font-medium mb-4'}>Delivery:</p>
                                <p className={'font-medium mb-4'}>${delievery.toFixed(2)}</p>
                            </div>
                            <Separator />
                            <div className={'flex justify-between'}>
                                <p className={'font-medium mt-4'}>Total:</p>
                                <div className={'flex flex-col items-end'}>
                                    <p className={'font-medium'}>${total.toFixed(2)}</p>
                                    <p className={'font-medium text-gray text-sm'}>VAT included</p>
                                </div>
                            </div>
                            <Button
                                className={'mt-10 w-full rounded-full p-5 font-semibold'}
                                variant={'secondary'}
                            >
                                Proceed to payment
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Basket;
