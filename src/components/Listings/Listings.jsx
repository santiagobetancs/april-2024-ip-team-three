import { Link } from "react-router-dom";
import ListingCard from "../ListingCard/ListingCard";
import "./Listings.scss";

export default function Listings() {
  const listings = [
    {
      img: "src/assets/images/handyman.jpg",
      alt: "sunglasses with case",
      price: "$75.00 per hour",
      title: "Home Repair and Maintenance",
      location: "Brantford",
      date: "1 hr",
      description:
        "Professional handyman services for all your home repair needs. From fixing leaky faucets to installing shelves, we handle it all efficiently and affordably.",
    },
    {
      img: "src/assets/images/flowers.jpg",
      alt: "flower bouquet",
      price: "$50 - $150 (depending on size and flowers)",
      title: "Elegant Bouquets for Every Occasion",
      location: "Toronto",
      date: "12 min",
      description:
        "Stunning floral arrangements crafted with care and creativity. Perfect for weddings, birthdays, and special events. Custom orders available upon request.",
    },
    {
      img: "src/assets/images/eyelashes.jpg",
      alt: "eyelash extensions",
      price: "$100 per full set",
      title: "Lash Extensions for Effortless Beauty",
      location: "Oshawa",
      date: "5 hrs",
      description:
        "Enhance your natural beauty with professionally applied lash extensions. Our meticulous application ensures a glamorous look that lasts. Book your appointment today!",
    },
    {
      img: "src/assets/images/phone.jpg",
      alt: "broken mobile phone",
      price: "$50 - $200 (depending on repair type)",
      title: "Fast and Reliable Phone Repair Services",
      location: "North York",
      date: "8 hrs",
      description:
        "Expert phone repair services for all major brands. From cracked screens to water damage, our technicians provide quick and affordable solutions to get your device back in top shape.",
    },
    {
      img: "src/assets/images/cupcakes.jpg",
      alt: "cupcakes on tray",
      price: "$3 - $20 (varies by item)",
      title: "Artisanal Baked Goods Delivered Fresh",
      location: "Milton",
      date: "1 min",
      description:
        "Indulge in delicious, freshly baked goods made with love and the finest ingredients. From crusty breads to decadent pastries, our bakery delights customers with every bite.",
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
