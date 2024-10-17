import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TrendingNhan from "~/Images/trendingNhan.jpg";
import LogoIntro from "~/Images/LogoIntro.jpg";
import BieuTuongVungChaiBanner from "~/Images/BieuTuongVungChaiBanner.jpg";
import DauAnPhaiManhBanners from "~/Images/DauAnPhaiManhBanner.jpg";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Home = () => {
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
    <div>
      <div className={cx("wrapper")}>
        <div>
          <div className={cx("logo-intro")}>
            <a>
              <img src={LogoIntro} alt="logoIntro"></img>
            </a>
          </div>
        </div>
        <h5
          className={cx(
            "text-center",
            "text-color-dark",
            "text-uppercase",
            "mb-3",
            "mt-3"
          )}
        >
          Cùng khám Phá
        </h5>
        <h2
          className={cx(
            "text-center",
            "text-color-red",
            "mb-5",
            "collection-title"
          )}
        >
          Xu Hướng Mới Nhất
        </h2>
        <Slider {...settings}>
          <div className={cx("slider-image")}>
            <a
              href="https://ngoctham.com/loai-san-pham/mat-day-chuyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TrendingNhan} alt="Mặt dây chuyền" loading="lazy" />
              <h5>Mặt Dây Chuyền</h5>
            </a>
          </div>
          <div className={cx("slider-image")}>
            <a
              href="https://ngoctham.com/loai-san-pham/mat-day-chuyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TrendingNhan} alt="Mặt dây chuyền" loading="lazy" />
              <h5>Mặt Dây Chuyền</h5>
            </a>
          </div>
          <div className={cx("slider-image")}>
            <a
              href="https://ngoctham.com/loai-san-pham/mat-day-chuyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TrendingNhan} alt="Mặt dây chuyền" loading="lazy" />
              <h5>Mặt Dây Chuyền</h5>
            </a>
          </div>
        </Slider>
      </div>
      <div className={cx("container", "mt-5", "text-center")}>
        <div className={cx("row", "justify-content-evenly")}>
          <div className={cx("col-6")}>
            <p style={{ marginBottom: "0px" }}>NHẪN NAM GEOMETRIC</p>
            <h4 className={cx("text-color-red")}>BIỂU TƯỢNG VỮNG CHÃI</h4>
            <div className={cx("vung-chai-banner")}>
              <Link to="/">
                <img src={BieuTuongVungChaiBanner} alt="Nam Geometric" />
              </Link>
            </div>
          </div>
          <div className={cx("col-6")}>
            <p style={{ marginBottom: "0px" }}>BST TRANG SỨC NAM 2024</p>
            <h4 className={cx("text-color-red")}>DẤU ẤN PHÁI MẠNH</h4>
            <div className={cx("dau-an-banner")}>
              <Link to="/">
                <img src={DauAnPhaiManhBanners} alt="Dấu Ấn Phái Mạnh" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
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
