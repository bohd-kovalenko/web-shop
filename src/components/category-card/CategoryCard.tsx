import {Button} from "@/components/ui/button.tsx";
import Model1 from "@/assets/models/image 6.png";
import Model2 from "@/assets/models/image 7.png";
import {useNavigate} from "react-router-dom";
import _ from 'lodash';
import {Routes} from "@/constants";

type CategoryCardProps = {
    category: string;
}

const CategoryCard = ({category}: CategoryCardProps) => {
    const quantityOfProducts = Math.floor(Math.random() * 1000);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(Routes.HOME);
    }

    return (
        <div className={'bg-secondary flex-1 lg:w-[30%] flex justify-between p-4 rounded-lg m-5 min-w-[350px] md:flex-none md:min-w-[450px]'}>
            <div className={'flex flex-col w-1/3'}>
                <h1 className={'text-2xl font-semibold'}>{_.capitalize(category)}</h1>
                <p className={'text-xl text-gray mt-2'}>Stylish shield,<br/>cold breeze.</p>
                <Button className={'mt-10 w-full rounded-full p-5 font-semibold'} variant={'primary'}
                        onClick={handleClick}>
                    {quantityOfProducts} Products
                </Button>
            </div>
            <div className={'relative w-2/3 overflow-hidden'}>
                <img src={Model1} alt={Model1} className={'min-w-[200px] h-auto absolute top-0 left-0'}/>
                <img src={Model2} alt={Model2} className={'min-w-[150px] h-auto absolute -top-[15px] left-[100px]'}/>
            </div>
        </div>
    );
};

export default CategoryCard;