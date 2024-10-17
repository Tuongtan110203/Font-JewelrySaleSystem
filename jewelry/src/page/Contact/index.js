import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

import contact from "~/Images/contact.jpg";
import email from "~/Images/email.svg";
import phone from "~/Images/phone.svg";
import calender from "~/Images/calendar.svg";
import facebook from "~/Images/facebook.svg";
import zalo from "~/Images/zalo.svg";
import instagram from "~/Images/instagram.svg";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div>
      <div className={cx("img-contact")}>
        <img src={contact} alt="Contact" />
      </div>
      <div className={cx("text-center")}>
        <h2 className={cx("text-color-red")}>DỊCH VỤ KHÁCH HÀNG</h2>
        <p className={cx("padding-20-539")}>
          Hướng tới chất lượng dịch vụ cao cấp, NTJ chú trọng mang đến trải
          nghiệm tốt nhất cho Quý khách, đồng thời sẵn sàng lắng nghe mọi chia
          sẻ và hỗ trợ tận tình trong suốt quá trình sử dụng sản phẩm.
        </p>
      </div>
      <div className={cx("text-center")}>
        <h2 className={cx("text-color-red")}>LIÊN HỆ</h2>
      </div>
      <div className={cx("container")}>
        <div className={cx("row", "text-center", "img-all")}>
          <div className={cx("col")}>
            <img src={email} alt="Email" />
            <a
              className={cx("contact-link")}
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@ngoctham.com"
            >
              Email
            </a>
          </div>
          <div className={cx("col")}>
            <img src={phone} alt="Phone" />
            <a
              className={cx("contact-link")}
              target="_blank"
              rel="noopener noreferrer"
              href="tel:1800 599 973"
            >
              0865429351
            </a>
          </div>
          <div className={cx("col")}>
            <img src={calender} alt="Calender" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cx("contact-link")}
              href="https://m.me/ngocthamjewelry"
            >
              Calender
            </a>
          </div>
        </div>
        <div className={cx("row", "text-center", "img-all1")}>
          <div className={cx("col")}>
            <img src={facebook} alt="Facebook" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cx("contact-link")}
              href="https://www.facebook.com/NgocThamJewelry/"
            >
              FaceBook
            </a>
          </div>
          <div className={cx("col")}>
            <img src={zalo} alt="Zalo" />
            <a
              href="https://zalo.me/0815509973"
              target="_blank"
              rel="noopener noreferrer"
              className={cx("contact-link")}
            >
              Zalo
            </a>
          </div>
          <div className={cx("col")}>
            <img src={instagram} alt="Instagram" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cx("contact-link")}
              href="https://www.instagram.com/ngocthamjewelry/"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className={cx("map-container")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.494207350883!2d106.68249197485689!3d10.773409689375175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2381dc8e99%3A0x51756d3629738aea!2sNgoc%20Tham%20Jewellery%20Co.%20Ltd!5e0!3m2!1sen!2s!4v1720203871106!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
