import Home from "~/page/Home";
import Contact from "~/page/Contact";
import TheGioiTrangSuc from "~/page/TheGioiTrangSuc";
import TamNhinSuMenh from "~/page/TamNhinSuMenh";
import GiaTriThuongHieu from "~/page/GiaTriThuongHieu";
import ThanhTuu from "~/page/ThanhTuu";
import LienHe from "~/page/Contact";
import Nhan from "~/page/Category/Nhan";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import DefaultLayoutWithoutBestSeller from "~/components/Layout/DefaultLayoutWithoutBestSeller";

// Public routes that do not require login
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/contact", component: Contact, layout: DefaultLayout },
  { path: "/category-nhan", component: Nhan, layout: DefaultLayout },

  {
    path: "/the-gioi-trang-suc",
    component: TheGioiTrangSuc,
    layout: DefaultLayoutWithoutBestSeller,
  },
  {
    path: "/tam-nhin-su-menh",
    component: TamNhinSuMenh,
    layout: DefaultLayoutWithoutBestSeller,
  },
  {
    path: "/gia-tri-thuong-hieu",
    component: GiaTriThuongHieu,
    layout: DefaultLayoutWithoutBestSeller,
  },
  {
    path: "/thanh-tuu",
    component: ThanhTuu,
    layout: DefaultLayoutWithoutBestSeller,
  },
  {
    path: "/lien-he",
    component: LienHe,
    layout: DefaultLayoutWithoutBestSeller,
  },
];

// Private routes that require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
