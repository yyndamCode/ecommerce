import { useEffect, useState } from "react";

const useMobileView = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.matchMedia("(max-width: 767px)").matches;
            setIsMobile(isMobileView);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};

export default useMobileView;