import classNames from "classnames/bind";
import styles from "./ThanhTuu.module.scss";
import thanhtuuV3 from "~/Images/thanhtuuV3.jpg";

const cx = classNames.bind(styles);

function ThanhTuu() {
  return (
    <div>
      <div className={cx("img-thanh-tuu-V3")}>
        <img src={thanhtuuV3} />
      </div>

      <div className={cx("text-center", "content-thanh-tuu")}>
        <h2 className={cx("text-color-red")}>THÀNH TỰU</h2>
        <p className={cx("padding-20-539")}>
          Trong suốt hành trình 30 năm rực rỡ, NTJ đã đạt được nhiều thành tựu
          nổi bật và giải thưởng cao quý, góp phần quan trọng đưa nét văn hoá
          trang sức của miền Nam vươn tầm trên thị trường kim hoàn trong nước.
        </p>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2023</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2022</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao – Chuẩn Hội Nhập</h3>
        <h3>Giải thưởng vàng lần thứ nhất (Bộ nữ trang vàng 18K)</h3>
        <h3>Sản phẩm vàng – Dịch vụ vàng Việt Nam, 2020</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2019</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2018</h3>
        <h3>Cúp vàng Thương hiệu uy tín Việt Nam, 2018</h3>
        <h3>Giải thưởng Nhãn hiệu vàng – Sản phẩm vàng, 2017</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2017</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2012</h3>
        <h3>Cúp vàng Thương hiệu Việt, 2006</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2006</h3>
        <h3>Hàng Việt Nam Chất Lượng Cao, 2005</h3>
        <h3>Cúp vàng Thương hiệu và Nhãn hiệu, 2005</h3>
        <h3>Giải thưởng Thương hiệu Việt, 2005</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
    </div>
  );
}

export default ThanhTuu;
