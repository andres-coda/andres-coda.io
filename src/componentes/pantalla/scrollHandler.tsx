import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandler() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elemento = document.querySelector(hash);
            if (elemento) {
                elemento.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return null;
}

export default ScrollHandler;