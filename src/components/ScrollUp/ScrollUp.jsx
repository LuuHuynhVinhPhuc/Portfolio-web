import React from 'react'
import "./scrollUp.css"

const ScrollUp = () => {
    const [showScrollUp, setShowScrollUp] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 560) {
                setShowScrollUp(true);
            } else {
                setShowScrollUp(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a href="#" className={`scrollup ${showScrollUp ? 'show' : ''}`}>
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}

export default ScrollUp