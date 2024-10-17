import classNames from "classnames/bind";
import styles from "./thegioi.module.scss";
//logo
import thegioitrangsuc from "~/Images/thegioitrangsuc.webp";
import tamnhinvasumenh from "~/Images/tamnhinvasumenh.jpg";
import giatrithuonghieuV2 from "~/Images/giatrithuonghieuV2.jpg";
import quytrinhphattrienV2 from "~/Images/quytrinhphattrienV2.jpg";
import thanhtuuV2 from "~/Images/thanhtuuV2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function TheGioiTrangSuc() {
  return (
    <div>
      <div>
        <img
          className={cx("the-gioi")}
          src={thegioitrangsuc}
          alt="Thế Giới Trang Sức"
        />
      </div>
      <div>
        <h2 className={cx("text-center", "mt-5", "text-color-red")}>
          THẾ GIỚI TRANG SỨC
        </h2>
      </div>
      <div>
        <p className={cx("text-center", "px535px")}>
          Được sáng lập vào năm 1989, Ngọc Thẩm Jewelry (NTJ) bắt đầu hành trình
          xây dựng thương hiệu trang sức chuyên biệt trong lĩnh vực vàng bạc, đá
          quý và kim cương. Sau hơn 30 năm, NTJ đã trở thành một trong những
          thương hiệu uy tín hàng đầu trong ngành kim hoàn tại Việt Nam.
        </p>
      </div>
      <div className={cx("container-fluid")}>
        <div className={cx("row")}>
          <div className={cx("col-sm-4")}>
            <h2 className={cx("text-color-red")}>TẦM NHÌN & SỨ MỆNH</h2>
            <p>
              Với tư duy thiết kế sáng tạo, tay nghề chuyên môn đáng tin cậy và
              tinh thần “dám đổi mới”, NTJ mong muốn trở thành nhà cung cấp
              trang sức hàng đầu tại Việt Nam và trên thị trường quốc tế.
            </p>
            <b>
              <a className={cx("view-more-tam-nhin")} href="/tam-nhin-su-menh">
                Xem thêm <FontAwesomeIcon icon={faCaretRight} />
              </a>
            </b>
          </div>
          <div className={cx("col-sm-8", "tam-nhin")}>
            <img src={tamnhinvasumenh} />
          </div>
        </div>
      </div>
      <div className={cx("container-fluid", "wrapper-gia-tri")}>
        <div className={cx("row", "content-gia-tri")}>
          <div className={cx("col-sm-4")}>
            <h2 className={cx("text-color-red")}>GIÁ TRỊ THƯƠNG HIỆU</h2>
            <p>
              Cùng với lịch sử lâu đời, mỗi thế hệ kế thừa NTJ đều không ngừng
              tôn vinh những giá trị truyền thống thông qua tinh hoa nghệ thuật
              chế tác kim hoàn và công nghệ đột phá.
            </p>
            <b>
              <a
                className={cx("view-more-gia-tri")}
                href="/gia-tri-thuong-hieu"
              >
                Xem thêm <FontAwesomeIcon icon={faCaretRight} />
              </a>
            </b>
          </div>

          <div className={cx("col-sm-8", "gia-tri")}>
            <img src={giatrithuonghieuV2} />
          </div>
        </div>
      </div>
      <div className={cx("container-fluid", "wrapper-quy-trinh")}>
        <div className={cx("row", "content-quy-trinh")}>
          <div className={cx("col-sm-4")}>
            <h2 className={cx("text-color-red")}>QUÁ TRÌNH PHÁT TRIỂN</h2>
            <p>
              NTJ trải qua nhiều cột mốc quan trọng để trở thành một biểu tượng
              độc đáo trên khắp khu vực miền Tây Nam Bộ. Khám phá hành trình đã
              tạo nên những di sản của NTJ.
            </p>
            <b>
              <a
                className={cx("view-more-quy-trinh")}
                href="/quy-trinh-phat-trien"
              >
                Xem thêm
                <FontAwesomeIcon
                  className={cx("icon-quy-trinh")}
                  icon={faCaretRight}
                />
              </a>
            </b>
          </div>

          <div className={cx("col-sm-8", "quy-trinh")}>
            <img src={quytrinhphattrienV2} />
          </div>
        </div>
      </div>
      <div className={cx("thanh-tuu")}>
        <h2>THÀNH TỰU</h2>
        <p>
          Trong suốt hành trình 30 năm rực rỡ, NTJ đã đạt được nhiều thành tựu
          nổi bật và giải thưởng cao quý, góp phần quan trọng đưa nét văn hoá
          trang sức của miền Nam vươn tầm trên thị trường kim hoàn trong nước.
        </p>
        <b>
          <a className={cx("view-more-thanh-tuu")} href="/thanh-tuu">
            Xem thêm
            <FontAwesomeIcon
              className={cx("icon-thanh-tuu")}
              icon={faCaretRight}
            />
          </a>
        </b>
      </div>
      <div>
        <img src={thanhtuuV2} className={cx("logo-thanh-tuu")} />
      </div>
    </div>
  );
}

export default TheGioiTrangSuc;
