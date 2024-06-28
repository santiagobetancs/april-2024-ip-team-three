import Header from "../../components/Header/Header";
import HeaderDesk from "../../components/HeaderDesk/HeaderDesk";
import './LocalBusinessPage.scss'

export default function LocalBusinessPage() {
    return (
        <>
            <div className="local__mobile">
                <Header />
            </div>
            <div className="local__desktop">
                <HeaderDesk />
            </div>
            <h1 className="local__title">
                Small Businesses
            </h1>
        </>
    )
}