import ListingCard from "../ListingCard/ListingCard";
import "./Listings.scss";

export default function Listings() {
  return (
    <>
      <ul className="listings">
        <li className="listings__item">
          <ListingCard />
        </li>
      </ul>
    </>
  );
}
