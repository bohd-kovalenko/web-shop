import {FaSlidersH} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select.tsx";


const Search = () => {
    return (
        <div className={'flex mt-20 mx-5'}>
            <div className={'relative border border-gray rounded-lg w-1/4 min-w-[250px] flex items-center'}>
                <CiSearch className={'text-gray absolute left-0 w-6 h-auto ml-2 pointer-events-none'}/>
                <input type="text" placeholder="Search..." className=" w-full h-full pl-10 rounded-lg " />
            </div>
            <Select defaultValue={"recomended"}>
                <SelectTrigger className={'ml-3 text-gray border border-gray p-4 rounded-lg w-fit h-full'} withArrow={false}>
                    <FaSlidersH/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={"recomended"}>Recomended</SelectItem>
                    <SelectItem value={"new"}>New released</SelectItem>
                    <SelectItem value={"price-increasing"}>Price increasing</SelectItem>
                    <SelectItem value={"price-decreasing"}>Price decreasing</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Search;