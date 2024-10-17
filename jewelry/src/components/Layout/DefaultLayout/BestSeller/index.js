import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellerNhan from "~/Images/BestSellerNhan.jpg";
import classNames from "classnames/bind";
import styles from "./BestSeller.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cx("best-seller")}>
      <h3 className={cx("text-center", "mb-5", "text-color-red")}>
        DANH MỤC ƯU CHUỘNG
      </h3>
      <Slider {...settings}>
        <div className={cx("slider-image")}>
          <a
            href="https://ngoctham.com/loai-san-pham/mat-day-chuyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BestSellerNhan} alt="Mặt dây chuyền" loading="lazy" />
            <h5>Mặt Dây Chuyền</h5>
          </a>
        </div>
        <div className={cx("slider-image")}>
          <a
            href="https://ngoctham.com/loai-san-pham/nhan-cuoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BestSellerNhan} alt="Nhẫn cưới" loading="lazy" />
            <h5>Nhẫn Cưới</h5>
          </a>
        </div>
        <div className={cx("slider-image")}>
          <a
            href="https://ngoctham.com/loai-san-pham/nhan-cuoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BestSellerNhan} alt="Nhẫn cưới" loading="lazy" />
            <h5>Nhẫn Cưới</h5>
          </a>
        </div>
        <div className={cx("slider-image")}>
          <a
            href="https://ngoctham.com/loai-san-pham/nhan-cuoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BestSellerNhan} alt="Nhẫn cưới" loading="lazy" />
            <h5>Nhẫn Cưới</h5>
          </a>
        </div>
        <div className={cx("slider-image")}>
          <a
            href="https://ngoctham.com/loai-san-pham/nhan-cuoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BestSellerNhan} alt="Nhẫn cưới" loading="lazy" />
            <h5>Nhẫn Cưới</h5>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default BestSeller;

const PrevArrow = (props) => (
  <button {...props} className={cx("slickArrow", "prevArrow")}>
    <FontAwesomeIcon className={cx("IconPrevNext")} icon={faArrowLeft} />
  </button>
);

const NextArrow = (props) => (
  <button {...props} className={cx("slickArrow", "nextArrow")}>
    <FontAwesomeIcon className={cx("IconPrevNext")} icon={faArrowRight} />
  </button>
);
