import classNames from "classnames/bind";
import styles from "./TamNhinSuMenh.module.scss";
//import logo
import tamnhinvasumenhV2 from "~/Images/tamnhinvasumenhV2.jpg";
import tamnhinvasumenhV3 from "~/Images/tamnhinvasumenhV3.jpg";
import LogoV2 from "~/Images/LogoV2.png";
import bieutuong from "~/Images/bieutuong.jpg";
import mausac from "~/Images/mausac.jpg";
import { text } from "@fortawesome/fontawesome-svg-core";
import trachnhiem from "~/Images/trachnhiem.svg";

const cx = classNames.bind(styles);

function TamNhinSuMenh() {
  return (
    <div>
      <div className={cx("img-tam-nhin-su-menh-V2")}>
        <img src={tamnhinvasumenhV2}></img>
      </div>
      <div className={cx("text-center", "content-tam-nhin")}>
        <h1 className={cx("text-color-red")}>TẦM NHÌN</h1>
        <p>
          Với tư duy thiết kế sáng tạo, tay nghề chuyên môn đáng tin cậy và tinh
          thần “dám đổi mới”, NTJ mong muốn trở thành nhà cung cấp trang sức
          hàng đầu tại Việt Nam và trên thị trường quốc tế.
        </p>
      </div>
      <div className={cx("img-tam-nhin-su-menh-V3")}>
        <img src={tamnhinvasumenhV3}></img>
      </div>
      <div className={cx("text-center", "content-su-menh")}>
        <h1 className={cx("text-color-red")}>SỨ MỆNH</h1>
        <p>
          Bằng chính sự tinh thông vượt bậc trong lĩnh vực trang sức và cung
          cách phục vụ chuyên nghiệp, NTJ nỗ lực mang đến vẻ đẹp kiêu sa và sự
          đẳng cấp cho khách hàng qua những sản phẩm trang sức mang giá trị thẩm
          mỹ cao.
        </p>
      </div>
      <div className={cx("container")}>
        <div className="row">
          <div className={cx("col-md-4", "content-logo")}>
            <h2 className={cx("text-color-red")}>Ý NGHĨA LOGO</h2>
            <p>
              Logo mới của NTJ đại diện cho toàn bộ nét văn hóa trang sức của
              miền Nam trên thị trường kim hoàn trong và ngoài nước.
            </p>
          </div>
          <div className={cx("col-md-8", "logoV2")}>
            <img src={LogoV2}></img>
          </div>
        </div>
      </div>
      <div className={cx("empty-space")}></div>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-md-8", "logo-bieu-tuong")}>
            <img src={bieutuong}></img>
          </div>
          <div className={cx("col-md-4", "content-bieu-tuong")}>
            <h2 className={cx("text-color-red")}>BIỂU TƯỢNG</h2>
            <p>
              Lấy ý tưởng từ tấm bảng hiệu thuỷ tinh đầu tiên của NTJ, biểu
              tượng ngôi sao toả sáng và vương miện được chọn làm hình ảnh chủ
              chốt cho bộ nhận diện thương hiệu.
            </p>
            <p>
              Ngôi sao bốn cánh cách điệu là biểu tượng cho ánh sáng lấp lánh
              của trang sức và nét đẹp Việt mà NTJ mãi tôn vinh.
            </p>
            <p>
              Hình tượng vương miện ba cạnh là sự hội tụ của ba tôn chỉ then
              chốt khẳng định giá trị thương hiệu NTJ và khát vọng trở thành nhà
              kim hoàn hàng đầu tại Việt Nam.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("empty-space")}></div>

      <div className={cx("container")}>
        <div className="row">
          <div className={cx("col-md-4", "content-mau-sac")}>
            <h2 className={cx("text-color-red")}>MÀU SẮC THƯƠNG HIỆU</h2>
            <p>
              Màu vàng đồng trên nền đỏ yên chi là hai màu chủ đạo của logo NTJ
              mang nhiều thông điệp ý nghĩa.
            </p>
            <p>
              Màu vàng đồng đại diện cho kim loại vàng, cũng chính là sản phẩm
              trọng tâm mang tính độc tôn trong các thiết kế của NTJ.
            </p>
            <p>
              Đỏ yên chi bắt nguồn từ màu sắc truyền thống của thương hiệu, biểu
              trưng cho hình ảnh lửa đỏ khi nung vàng, đồng thời thể hiện sự
              nhiệt huyết và niềm đam mê mãnh liệt của NTJ trong nghệ thuật chế
              tác kim hoàn.
            </p>
          </div>
          <div className={cx("col-md-8", "mau-sac")}>
            <img src={mausac}></img>
          </div>
        </div>
      </div>
      <div className={cx("empty-space")}></div>

      <div className={cx("text-center")}>
        <h2 className={cx("text-color-red")}>GIÁ TRỊ CỐT LÕI</h2>
        <div className={cx("empty-space-20")}></div>
        <p>
          Cùng với 3 giá trị cốt lõi: Trách nhiệm, Sáng tạo, Kết quả được NTJ
          gìn giữ trong suốt hành trình hơn 30 năm là nền tảng và kim chỉ nam
          của doanh nghiệp.
        </p>
        <div className={cx("empty-space-20")}></div>
        <img className={cx("logo-trach-nhiem")} src={trachnhiem}></img>
      </div>
    </div>
  );
}

export default TamNhinSuMenh;
