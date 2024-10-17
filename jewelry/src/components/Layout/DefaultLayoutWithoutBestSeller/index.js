// DefaultLayoutWithoutBestSeller.js
import Header from "~/components/Layout/DefaultLayout/Header";
import Footer from "~/components/Layout/DefaultLayout/Footer";

function DefaultLayoutWithoutBestSeller({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="content">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayoutWithoutBestSeller;
