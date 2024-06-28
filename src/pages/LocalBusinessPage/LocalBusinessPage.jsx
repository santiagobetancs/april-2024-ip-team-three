import Header from "../../components/Header/Header";
import HeaderDesk from "../../components/HeaderDesk/HeaderDesk";

export default function LocalBusinessPage() {
    return (
        <>
            <div className="local__mobile">
                <Header />
            </div>
            <div className="local__desktop">
                <HeaderDesk />
            </div>
        </>
    )
}