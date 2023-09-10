import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', detect);

      return(() => {
        window.removeEventListener('resize', detect);
      });
    }, []);

    const detect = () => {
        setWidth(window.innerWidth);
    };
    return width<1100?true:false;
};

export default useIsMobile;