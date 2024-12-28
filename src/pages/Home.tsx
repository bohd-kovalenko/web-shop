import SliderCard from "@/components/slider-card/SliderCard.tsx";
import Slider from "react-slick";
import {useState} from "react";
import ShopItem from "@/components/shop-item/ShopItem.tsx";
import shopElements from '@/constants/shop-elements.json';
import sliderElements from '@/constants/sliders-elements.json';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Search from "@/components/search/Search.tsx";

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        className: "my-12 h-[250px] w-[80%] mx-auto",
        centerMode: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        speed: 500,
        dots: true,
        arrows: false,
        centerPadding: "0px",
        beforeChange: (_: number, next: number) => setActiveSlide(next),
        afterChange: (current: number) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };


    return (
        <div className={'p-5'}>
            <Slider {...settings}>
                {
                    sliderElements.map((elem, i) => (
                        <SliderCard elem={elem} isActive={i === activeSlide}/>
                    ))
                }
            </Slider>
            <Search/>
            <div className="mt-5 flex flex-shopElement flex-wrap w-full justify-center lg:justify-normal">
                {shopElements.map((elem, i) => (
                    <ShopItem key={i} elem={elem}/>
                ))}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Home;