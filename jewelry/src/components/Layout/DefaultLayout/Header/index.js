import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import logo from "~/Images/goldIcon1.png";
import thegioitrangsuc from "~/Images/thegioitrangsuc.webp";
import tamnhinvathuonghieu from "~/Images/tamnhinvathuonghieu.webp";
import giatrithuongthieu from "~/Images/giatrithuonghieu.jpg";
import quytrinhphattrien from "~/Images/quytrinhphattrien.jpg";
import thanhtuu from "~/Images/thanhtuu.jpg";
import NTJFlagship from "~/Images/NTJFlagship.jpg";
import nhan from "~/Images/nhan.jpg";
import vongtay from "~/Images/vongtay.jpg";
import bongtai from "~/Images/bongtay.jpg";
import kieng from "~/Images/kieng.webp";
import lactay from "~/Images/lactay.jpg";
import daychuyen from "~/Images/daychuyen.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [activeImage, setActiveImage] = useState(thegioitrangsuc);
  const [activeImageCategory, setActiveImageCategory] = useState(nhan);

  const [isLogoContentVisible, setIsLogoContentVisible] = useState(false);
  const [isLogoSearchVisible, setIsLogoSearchVisible] = useState(false);

  const handleLogoClick = () => {
    setIsLogoContentVisible(!isLogoContentVisible);
  };

  const handleSearchClick = () => {
    setIsLogoSearchVisible(!isLogoSearchVisible);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("lg")} onClick={handleLogoClick}>
          <div className={cx("logo")}>
            <img className={cx("image")} src={logo} alt="logo"></img>
            <span>Giá Vàng</span>
          </div>
        </div>

        <div className={cx("brand")}>
          <Link to="/">
            <img
              src="https://ngoctham.com/wp-content/themes/understrap/img/logo-ngoctham-compact.svg"
              alt="brand"
            />
          </Link>
        </div>

        <div className={cx("search")} onClick={handleSearchClick}>
          <Link to="/" className={cx("search-icon")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="/" className={cx("tym-icon")}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>

      <div className={cx("wrapper-menu")}>
        <div className={cx("menu")}>
          <ul>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link>VỀ NGỌC THẨM</Link>
              <div className={cx("dropdown-content-about", "container-fluid")}>
                <div className={cx("row")}>
                  <div className={cx("col-6")}>
                    <ul className={cx("vertical-menu")}>
                      <li onMouseEnter={() => setActiveImage(thegioitrangsuc)}>
                        <Link to="/the-gioi-trang-suc">THẾ GIỚI TRANG SỨC</Link>
                      </li>
                      <li
                        onMouseEnter={() => setActiveImage(tamnhinvathuonghieu)}
                      >
                        <Link to="/tam-nhin-su-menh">TẦM NHÌN & SỨ MỆNH</Link>
                      </li>
                      <li
                        onMouseEnter={() => setActiveImage(giatrithuongthieu)}
                      >
                        <Link to="/gia-tri-thuong-hieu">
                          GIÁ TRỊ THƯƠNG HIỆU
                        </Link>
                      </li>
                      <li
                        onMouseEnter={() => setActiveImage(quytrinhphattrien)}
                      >
                        <Link to="/tam-nhin-su-menh">QUÁ TRÌNH PHÁT TRIỂN</Link>
                      </li>
                      <li onMouseEnter={() => setActiveImage(thanhtuu)}>
                        <Link to="/thanh-tuu">THÀNH TỰU</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("col-6")}>
                    <a className={cx("the-gioi")}>
                      <img
                        src={activeImage}
                        alt="logo"
                        className={cx("image-about")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link>LOẠI SẢN PHẨM</Link>
              <div
                className={cx("dropdown-content-category", "container-fluid")}
              >
                <div className={cx("row")}>
                  <div className={cx("col-6")}>
                    <ul className={cx("vertical-menu")}>
                      <li onMouseEnter={() => setActiveImageCategory(nhan)}>
                        <Link to="/category-nhan">NHẪN</Link>
                      </li>
                      <li onMouseEnter={() => setActiveImageCategory(vongtay)}>
                        <Link to="/category-vong-tay">VÒNG TAY</Link>
                      </li>
                      <li onMouseEnter={() => setActiveImageCategory(bongtai)}>
                        <Link to="/category-bong-tai">BÔNG TAI</Link>
                      </li>
                      <li onMouseEnter={() => setActiveImageCategory(kieng)}>
                        <Link to="/category-kieng">KIỀNG</Link>
                      </li>
                      <li onMouseEnter={() => setActiveImageCategory(lactay)}>
                        <Link to="/category-lac-tay">LẮC TAY</Link>
                      </li>
                      <li
                        onMouseEnter={() => setActiveImageCategory(daychuyen)}
                      >
                        <Link to="/category-day-chuyen">DÂY CHUYỀN</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("col-6")}>
                    <a className={cx("the-gioi")}>
                      <img
                        src={activeImageCategory}
                        alt="logo"
                        className={cx("image-about-category")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/lien-he">Liên Hệ</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* search */}
      {isLogoSearchVisible && (
        <div className={cx("container")}>
          <div className={cx("search-logic")}>
            <div className={cx("input-container")}>
              <input
                type="text"
                placeholder="TÌM KIẾM..."
                className={cx("search-input")}
              />
              <Link to="/" className={cx("search-icon")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Gold-type */}
      {isLogoContentVisible && (
        <div className={cx("container", "gold-price")}>
          <div className={cx("row")}>
            <div className={cx("col-2", "update-gold")}>
              <h2>GIÁ VÀNG</h2>
              <p>
                <span className={cx("text-color-red")}>ĐƠN VỊ TÍNH </span>
                VND/CHỈ
                <br></br>
                02/07/2024 7:00 pm
              </p>
            </div>
            <div className={cx("col-8")}>
              <table className={cx("table", "type-gold-thead")}>
                <thead className={cx("")}>
                  <tr>
                    <th>Loại Vàng</th>
                    <th>Giá Mua</th>
                    <th>Giá Mua</th>
                  </tr>
                </thead>
                <tbody className={cx("type-gold-tbody")}>
                  <tr className={cx("table-row")}>
                    <td>Vàng Miếng SJC</td>
                    <td>7.750.000</td>
                    <td>8.050.000</td>
                  </tr>
                  <tr className={cx("table-row")}>
                    <td>Nhẫn 999.9</td>
                    <td>7.350.000</td>
                    <td>7.520.000</td>
                  </tr>
                  <tr className={cx("table-row")}>
                    <td>Vàng Ta (990)</td>
                    <td>7.250.000</td>
                    <td>7.470.000</td>
                  </tr>
                  <tr className={cx("table-row")}>
                    <td>Vàng 18K (750)</td>
                    <td>5.108.000</td>
                    <td>5.543.000</td>
                  </tr>
                  <tr className={cx("table-row")}>
                    <td>Vàng trắng Au750</td>
                    <td>5.108.000</td>
                    <td>5.543.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
