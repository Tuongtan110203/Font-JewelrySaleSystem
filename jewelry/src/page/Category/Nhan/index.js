import classNames from "classnames/bind";
import styles from "./Nhan.module.scss";
import nhanV2 from "~/Images/nhanV2.webp";
import nhanvang24k from "~/Images/nhanvang24k.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Nhan() {
  return (
    <div className={cx("wrapper-nhan")}>
      <div className={cx("blb-nhan")}>
        <h2 className={cx("text-color-red")}>Nhẫn</h2>
      </div>
      <div className={cx("img-nhan")}>
        <img src={nhanV2} alt="Nhẫn" />
      </div>
      <div className={cx("container-fluid", "content-breadcrumb")}>
        <nav style={{ "--bs-breadcrumb-divider": "'.'" }}>
          <b>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item">
                <a>Loại Sản Phẩm</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Nhẫn
              </li>
            </ol>
          </b>
        </nav>
      </div>
      {/* //filters  */}
      <div className={cx("container", "wrapper-filters")}>
        <div className={cx("row")}>
          <div className={cx("col-md-1")}>Bộ Lọc</div>
          <div className={cx("col-md-3")}>
            <p>
              Giá Thành{" "}
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("font-awesome-icon")}
              />
            </p>
          </div>
          <div className={cx("col-md-2")}>
            <p>
              Đá Chính{" "}
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("font-awesome-icon")}
              />
            </p>
          </div>
          <div className={cx("col-md-4")}>
            <p>
              Loại Vàng{" "}
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("font-awesome-icon")}
              />
            </p>
          </div>
          <div className={cx("col-md-2")}>
            <p>
              Sắp Xếp{" "}
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("font-awesome-icon")}
              />
            </p>
          </div>
        </div>
      </div>

      <div className={cx("empty-space-20")}></div>
      {/* content nhan */}
      <div className={cx("container-fluid", "wrapper-content")}>
        {[...Array(8)].map((_, index) => (
          <div className={cx("content-item")} key={index}>
            <h5>Mới</h5>
            <img src={nhanvang24k} alt={`Nhẫn Vàng 24k  ${index + 1}`} />
            <p className={cx("product-name")}>Nhẫn Vàng 24k KHN000001</p>
            <b>
              <p className={cx("product-price")}>32,323,232 VND</p>
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nhan;
