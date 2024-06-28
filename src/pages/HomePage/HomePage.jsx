import Category from "../../components/Category/Category";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import HeaderDesk from "../../components/HeaderDesk/HeaderDesk";
import './HomePage.scss'

export default function HomePage() {
  return (
    <>
        <div className="home__mobile">
            <Header />
        </div>
        <div className="home__desktop">
            <HeaderDesk />
        </div>
        <Category />
        <Sidebar />
    </>
  );
}

