import { Link } from "react-router-dom";
import ListingCard from "../ListingCard/ListingCard";
import "./Listings.scss";

export default function Listings({ listingsList }) {
  const listings = [
    {
      img: "src/assets/images/backpack.jpg",
      alt: "green canvas backpack",
      price: "$15.00",
      title: "VINTA Canvas backpack",
      location: "Milton",
      date: "1 min",
      description:
        "Green canvas backpack with leather straps. In good condition. Smoke-free home.",
    },
    {
      img: "src/assets/images/heels.jpg",
      alt: "floral patterned high heels",
      price: "$24.00",
      title: "Blue floral pumps",
      location: "Toronto",
      date: "12 min",
      description:
        "Aldo brand blue stiletto pumps with floral print. Only worn once, in great condition.",
    },
    {
      img: "src/assets/images/sunglasses.jpg",
      alt: "sunglasses with case",
      price: "$50.00",
      title: "Sunglasses",
      location: "Brantford",
      date: "1 hr",
      description:
        "Brown sunglasses with pale peach frames. Comes with storage case.",
    },
    {
      img: "src/assets/images/camera.jpg",
      alt: "polaroid camera",
      price: "$125.00",
      title: "Instant Camera for sale!",
      location: "Oshawa",
      date: "5 hrs",
      description:
        "Polaroid brand instant camera. In mint condition, barely used.",
    },
    {
      img: "src/assets/images/headphones.jpg",
      alt: "wireless headphones",
      price: "$30.00",
      title: "Wireless headphones",
      location: "North York",
      date: "8 hrs",
      description:
        "Wireless over ear headphones. In great condition and very comfortable. Great sound quality.",
    },
  ];

  return (
    <>
      <div className="listings">
        {listings.map((listing, index) => {
          return (
            <Link className="listings__link" key={index}>
              <ListingCard
                img={listing.img}
                alt={listing.alt}
                price={listing.price}
                title={listing.title}
                location={listing.location}
                date={listing.date}
                description={listing.description}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
