import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";
import "./BackToTop.css";

export default function BackToTop() {
  const SCROLL_HEIGHT = 300;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY >= SCROLL_HEIGHT);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back To Top"
      className={`BackToTop ${
        showButton ? "BackToTop-Visible" : "BackToTop-Invisible"
      }`}
    >
      <ArrowUpwardIcon className="BackToTop-Icon" />
    </button>
  );
}
