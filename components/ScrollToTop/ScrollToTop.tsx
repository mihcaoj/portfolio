import { useEffect } from 'react';
import arrowUpImage from '../../src/assets/images/arrow-up.png';

function ScrollToTop() {
  useEffect(() => {
    const backToTopButton = document.querySelector(".back-to-top") as HTMLElement;
    const scrollDownIndicator = document.querySelector(".scroll-indicator") as HTMLElement;

    const handleScroll = () => {
      if (backToTopButton) {
        if (window.scrollY > 900) {
          backToTopButton.style.visibility = "visible";
          backToTopButton.style.opacity = "1";
        } else {
          backToTopButton.style.visibility = "hidden";
          backToTopButton.style.opacity = "0";
        }
      }

      if (scrollDownIndicator) {
        if (window.scrollY < 600) {
          scrollDownIndicator.style.visibility = "visible";
          scrollDownIndicator.style.opacity = "1";
        } else {
          scrollDownIndicator.style.visibility = "hidden";
          scrollDownIndicator.style.opacity = "0";
        }
      }
    };

    const handleBackToTopClick = (e: Event) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    if (backToTopButton) {
      backToTopButton.addEventListener("click", handleBackToTopClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener("click", handleBackToTopClick);
      }
    };
  }, []);

  return (
    <a href="#top" className="back-to-top" title="Back to Top">
      <img src={arrowUpImage} alt="Back to Top" className="back-to-top__image"/>
    </a>
  );
}

export default ScrollToTop;