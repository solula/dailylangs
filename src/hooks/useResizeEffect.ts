import { useEffect } from "react";

const useResizeEffect = (effect: () => void) => {
    useEffect(() => {
        const handleResize = () => {
            effect();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [effect]);
};

export default useResizeEffect;
