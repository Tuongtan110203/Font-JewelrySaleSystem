import Header from "./Header";
import Footer from "./Footer";
import BestSeller from "./BestSeller";

function DefaultLayout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="content" style={{ marginTop: 120 }}>
        {children}
      </div>
      <div>
        <BestSeller />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
