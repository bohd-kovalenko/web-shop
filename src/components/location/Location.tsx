import {Select, SelectTrigger,SelectValue, SelectContent, SelectItem} from "../ui/select";
import {citiesList} from "@/constants";
import { IoLocationOutline } from "react-icons/io5";



const Location = () => {

    return (
            <Select defaultValue={citiesList[0].name} >
                <div className={'flex flex-col'}>
                    <p className={'text-xs md:hidden'}>Location</p>
                    <SelectTrigger className="w-[160px] pl-0 md:pl-3 md:ml-10">
                        <IoLocationOutline className={'mr-1 text-black min-w-6 h-auto'}/>
                        <SelectValue className={'text-black'}/>
                    </SelectTrigger>
                </div>
                <SelectContent>
                    {
                        citiesList.map((value, index) => (
                            <SelectItem key={index} value={value.name}>{value.name},{value.country}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
    );
};

export default Location;