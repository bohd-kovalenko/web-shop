import {motion} from "framer-motion";

type BusketAnimation = {
    isAnimating: boolean
}
const BusketAnimation = ({isAnimating}:BusketAnimation) => {
    return (
        <motion.span
            className={`bg-bag w-[22px] h-[22px] rounded-full absolute`}
            initial={{opacity: 1, scale: 1.5, zIndex: -1, visibility: 'hidden'}}
            animate={isAnimating && {top: 0, right: 0, opacity: 0,visibility:'visible', scale: 0.5}}
            transition={{duration: 0.5, ease: "easeOut"}}
        />
    );
};

export default BusketAnimation;