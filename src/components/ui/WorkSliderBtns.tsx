"use client";
import { Swiper, useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { icons } from "lucide-react";
interface WorkSliderProps {
  containerStyle: string;
  btnStyle: string;
  iconsStyle: string;
}
const WorkSliderBtns: React.FC<WorkSliderProps> = ({
  containerStyle,
  btnStyle,
  iconsStyle,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyle} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
