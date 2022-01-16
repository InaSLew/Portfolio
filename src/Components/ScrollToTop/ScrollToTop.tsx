import { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const threshold = 150;
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => window.scrollTo({top: 0});

    useEffect(() => {
        const toggleIsVisible = () =>  setIsVisible(window.scrollY > threshold);
        window.addEventListener('scroll', toggleIsVisible);
        return () => window.removeEventListener('scroll', toggleIsVisible);
    }, []);

    return (
        <div>
            {isVisible && (
                <div onClick={scrollToTop} id="scroll-to-top"><span className='material-icons'>arrow_upward</span></div>
            )}
        </div>
    );
}
export default ScrollToTop;
