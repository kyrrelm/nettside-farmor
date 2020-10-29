// modulo that supports negative numbers (so that e.g. -5 % 4 = 3)
import {useLayoutEffect, useState} from "react";

export const modulo = (a: number, n: number) => ((a % n) + n) % n

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}
