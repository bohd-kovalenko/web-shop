import CategoryCard from "@/components/category-card/CategoryCard.tsx";

const Category = () => {
    const categories = ['jackets', 'shirts', 'pants', 'shoes', 'accessories', 'bags']

    return (
        <div className={'py-9 px-3 md:p-9 flex flex-col items-center h-full'}>
            <div className={'flex justify-center w-full mb-5'}>
                <h1 className={'font-semibold text-lg'}>Category</h1>
            </div>
            <div className={'flex flex-wrap justify-center lg:justify-evenly w-full'}>
                {
                    categories.map((category) => (
                        <CategoryCard key={category} category={category}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;