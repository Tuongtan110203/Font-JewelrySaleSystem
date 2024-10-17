import classNames from "classnames/bind";
import styles from "./GiaTriThuongHieu.module.scss";
import giatrithuongthieuV3 from "~/Images/giatrithuonghieuV3.jpg";
import chungnhan from "~/Images/chungnhan.jpg";
import thietkedocton from "~/Images/thietkedocton.jpg";
import nguyenlieudangcap from "~/Images/nguyenlieudangcap.webp";
import doingunghenhantam from "~/Images/doingunghenhantam.webp";
import giatrithuonghieuvideo from "~/Images/giatrithuonghieu.mp4";
const cx = classNames.bind(styles);

function GiaTriThuongHieu() {
  return (
    <div>
      <div>
        <img className={cx("logo-gia-triV3")} src={giatrithuongthieuV3}></img>
      </div>
      <div className={cx("text-center")}>
        <h2 className={cx("text-color-red")}>GIÁ TRỊ THƯƠNG HIỆU</h2>
        <p className={cx("padding-20-539")}>
          Cùng với lịch sử lâu đời, mỗi thế hệ kế thừa NTJ đều không ngừng tôn
          vinh những giá trị truyền thống thông qua tinh hoa nghệ thuật chế tác
          kim hoàn và công nghệ đột phá.
        </p>
      </div>
      <div>
        <img className={cx("logo-chung-nhan")} src={chungnhan}></img>
      </div>
      <div className={cx("text-center")}>
        <h2 className={cx("text-color-red")}>KHỞI NGUỒN DI SẢN</h2>
        <p className={cx("padding-20-539")}>
          Năm 1989, thương hiệu NTJ ra đời với cửa hàng trang sức đầu tiên tại
          Thành phố Mỹ Tho – nơi khởi nguồn của một di sản. Trải qua ba thế hệ
          kế thừa, NTJ nổi danh là một biểu tượng độc đáo của ngành trang sức
          tại miền Nam.
        </p>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-4", "content-right")}>
            <h2 className={cx("text-color-red")}>THIẾT KẾ ĐỘC TÔN</h2>
            <p>
              Với cảm hứng sáng tạo từ những con người hồn hậu và nét văn hoá
              đặc trưng của miền Tây Nam Bộ, các thiết kế trang sức tại NTJ mang
              kiểu dáng bắt mắt và đầy sống động trên nền chất liệu vàng và đá
              quý tự nhiên đạt đủ các tiêu chuẩn của trang sức cao cấp.
            </p>
          </div>
          <div className={cx("col-8")}>
            <img className={cx("logo-right")} src={thietkedocton} />
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-8")}>
            <img className={cx("logo-left")} src={nguyenlieudangcap} />
          </div>
          <div className={cx("col-4", "content-right")}>
            <h2 className={cx("text-color-red")}>NGUYÊN LIỆU ĐẲNG CẤP</h2>
            <p>
              Sản phẩm trang sức hoàn hảo luôn được tạo nên từ những nguyên liệu
              có chất lượng cao nhất. Tại NTJ, những nguyên liệu đạt tiêu chuẩn
              và có nguồn gốc xuất xứ rõ ràng luôn là lựa chọn hàng đầu, đảm bảo
              những người thợ kim hoàn luôn có được nguyên liệu tốt nhất để tạo
              nên những món trang sức tinh xảo.
            </p>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-4", "content-left")}>
            <h2 className={cx("text-color-red")}>
              ĐỘI NGŨ NGHỆ NHÂN TÂM HUYẾT
            </h2>
            <p>
              Bằng sự tận tâm và tỉ mỉ trong từng chi tiết nhỏ, những nghệ nhân
              kim hoàn đã thổi hồn vào từng sản phẩm trang sức NTJ. Vì thế, NTJ
              trân trọng tài năng và nuôi dưỡng đam mê của họ bằng cách mang đến
              một môi trường làm việc công tâm và bền vững nhất có thể.
            </p>
          </div>
          <div className={cx("col-8")}>
            <img className={cx("logo-right")} src={doingunghenhantam} />
          </div>
        </div>
      </div>

      <div className={cx("empty-space")}></div>
      <div>
        <video autoPlay className={cx("video-gia-tri")}>
          <source src={giatrithuonghieuvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default GiaTriThuongHieu;
