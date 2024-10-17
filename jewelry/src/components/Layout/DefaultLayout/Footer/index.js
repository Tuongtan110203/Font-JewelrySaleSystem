import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FaceBookIcon, InstagramIcon, YoutubeIcon, ZaloIcon } from "~/Images";
import BoCongThuong from "~/Images/bct.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className="container-fluid margint">
        <div className="row">
          <div className="col-lg-2">
            <p>HỖ TRỢ KHÁCH HÀNG</p>
            <div className={cx("menu-ho-tro")}>
              <ul>
                <li>
                  <Link to="/">Hỏi & Đáp</Link>
                </li>
                <li>
                  <Link to="/">Bảo Hành & Thu Đổi</Link>
                </li>
                <li>
                  <Link to="/">Chính Sách Bảo Mật</Link>
                </li>
                <li>
                  <Link to="/">Hướng Dẫn Mua Hàng</Link>
                </li>
                <li>
                  <Link to="/">Bảng Giá Vàng</Link>
                </li>
                <li>
                  <Link to="/">Mục Lục</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <p>VỀ CHÚNG TÔI</p>
            <div className={cx("menu-ho-tro")}>
              <ul>
                <li>
                  <Link to="/">Về Ngọc Thẩm</Link>
                </li>
                <li>
                  <Link to="/">Tuyển Dụng</Link>
                </li>
                <li>
                  <Link to="/">Tin Tức</Link>
                </li>
                <li>
                  <Link to="/">Liên Hệ</Link>
                </li>
                <li>
                  <Link to="/">NTJ Flagship</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <p>HƯỚNG DẪN SỬ DỤNG</p>
            <div className={cx("menu-ho-tro")}>
              <ul>
                <li>
                  <Link to="/">Đo Size</Link>
                </li>
                <li>
                  <Link to="/">Bảo Quản Trang Sức</Link>
                </li>
                <li>
                  <Link to="/">Cẩm Nang Trang Sức</Link>
                </li>
                <li>
                  <Link to="/">Kiến Thức Kim Cương</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <p>TIN MỚI NHẤT</p>
            <div className={cx("tin-moi-nhat")}>
              <p>
                Nhận ngay thông tin về các thiết kế và ưu đãi mới nhất từ NTJ.
              </p>
            </div>
            <div className={cx("email")}>
              <p>Email: NgocThamBro@gmail.com</p>
            </div>
            <div className="row">
              <Link
                to="https://www.facebook.com/NgocThamJewelry/"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("social-icons")}
              >
                {FaceBookIcon}
              </Link>
              <Link
                to="https://www.instagram.com/ngocthamjewelry/"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("social-icons")}
              >
                {InstagramIcon}
              </Link>
              <Link
                to="https://www.youtube.com/channel/UC7y8MbAmHN9_9y5BB6fYgcg"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("social-icons")}
              >
                {YoutubeIcon}
              </Link>
              <Link
                to="https://zalo.me/0815509973"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("social-icons")}
              >
                {ZaloIcon}
              </Link>
              <Link
                to="http://online.gov.vn/Home/WebDetails/86905"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("social-icons")}
              >
                <img
                  className={cx("bo-cong-thuong")}
                  src="https://ngoctham.com/wp-content/themes/understrap/img/bct.png"
                  alt="Bộ Công Thương"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("col-6", "bottom-logo")}>
          <Link to="/">
            <img
              src="https://ngoctham.com/wp-content/themes/understrap/img/logo-ntj.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className={cx("col-6", "bottom-logo", "end-logo")}>
          <h5>© Ngọc Thẩm Jewelry</h5>
        </div>
      </div>
      <div className={cx("company-info")}>
        <p>
          © 2024. CÔNG TY TNHH VÀNG BẠC ĐÁ QUÝ NGỌC THẨM. Địa chỉ: 26/4 Nguyễn
          Huỳnh Đức, Phường 8, Thành phố Mỹ Tho, Tỉnh Tiền Giang. Điện thoại:
          1800 599 973. Email:
          <a href="mailto:info@ngoctham.com"> info@ngoctham.com</a> <br></br>
          Giấy chứng nhận đăng ký doanh nghiệp: 1200102258, do Sở Kế hoạch và
          Đầu tư tỉnh Tiền Giang cấp lần đầu ngày 09/05/2002
        </p>
      </div>
    </div>
  );
}

export default Footer;
