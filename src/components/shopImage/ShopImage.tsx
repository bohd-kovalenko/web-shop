type ShopImage = {
    src?: string;
    size?: 'extra-small' | 'small' | 'medium' | 'large';
    className?: string;
}

const ShopImage = ({src, size='small',className}: ShopImage) => {

    let iconSize = '';
    switch (size) {
        case 'extra-small':
            iconSize = 'w-[150px] min-h-[100px]';
            break;
        case 'small':
            iconSize = 'w-[200px] min-h-[150px]';
            break;
        case 'medium':
            iconSize = 'h-[15vw] min-w-[250px] min-h-[230px]';
            break;
        case 'large':
            iconSize = 'h-[35vw] max-h-[500px] min-h-[300px] min-w-[250px]';
            break;
        default:
            iconSize = 'h-[20vw]';
            break;
    }

    return (
        <img src={src} alt="item" className={`w-full object-cover ${iconSize} ${className}`}/>
    );
};

export default ShopImage;