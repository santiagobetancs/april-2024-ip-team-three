import Header from "../../components/Header/Header";
import HeaderDesk from "../../components/HeaderDesk/HeaderDesk";
import "./LocalBusinessPage.scss";
import { Link } from "react-router-dom";
import Listings from "../../components/Listings/Listings";

export default function LocalBusinessPage() {
  return (
    <>
      <div className="local__mobile">
        <Header />
      </div>
      <div className="local__desktop">
        <HeaderDesk />
      </div>
      <h1 className="local__title">Small Businesses</h1>
      <div className="local__block">
        <Link className="local__link" to="/verify">
          <h3 className="local__product">Sell your product</h3>
        </Link>
      </div>
      <Listings />
    </>
  );
}
