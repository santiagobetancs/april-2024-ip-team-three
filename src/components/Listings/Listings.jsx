import { Link } from "react-router-dom";
import ListingCard from "../ListingCard/ListingCard";
import "./Listings.scss";

export default function Listings({ listingsList }) {
  return (
    <>
      <div className="listings">
        {listingsList.map((listing) => {
          return (
            <Link className="listings__link" key={listing.id}>
              <ListingCard
                img={listing.img}
                alt={listing.alt}
                price={listing.price}
                title={listing.title}
                location={listing.location}
                date={listing.date}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
