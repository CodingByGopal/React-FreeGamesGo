import { useState, useEffect } from "react";
import useElementOnScreen from "../Hooks/useElementOnScreen";

const LazyImg = ({
  alt,
  placeholderSrc,
  src,
  otherClasses,
  errorImg,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0,
  });

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading  " : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;

    // only loading when image is in viewport to imporve speed
    if (isVisible) {
      img.onload = () => {
        setImgSrc(src);
      };
      img.onerror = () => {
        setImgSrc(errorImg);
      };
    }
  }, [src, isVisible, errorImg]);

  return (
    <img
      ref={containerRef}
      {...{ src: imgSrc, ...props }}
      alt={props.alt || "posters"}
      className={`${otherClasses} ${customClass}`}
    />
  );
};

export default LazyImg;
