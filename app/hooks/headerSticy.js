import { useEffect, useRef, useState } from "react";

const useStickyHeader = () => {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current.getBoundingClientRect();
            if (window.pageYOffset > header.top + header.height) {
                setSticky({ isSticky: true, offset: header.height });
            } else {
                setSticky({ isSticky: false, offset: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { sticky, headerRef };
};

export default useStickyHeader;