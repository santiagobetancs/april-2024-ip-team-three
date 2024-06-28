import React from "react";
import "./Category.scss";

const categories = [
  {
    title: "Cars & Trucks",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/cars.dfb64a78.webp",
  },
  {
    title: "Classic Cars",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/classic-cars.86b0387c.webp",
  },
  {
    title: "RV's, Campers & Trailers",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/rvs.880685e6.webp",
  },
  {
    title: "Boats & Watercraft",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/boats.3f147d2c.webp",
  },
  {
    title: "Motorcycles",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/motorcycles.06b4976d.webp",
  },
  {
    title: "Vehicle Parts, Tires, & Accessories",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/auto-parts.65a7508e.webp",
  },
  {
    title: "Heavy Equipment",
    image:
      "https://webapp-static.ca-kijiji-production.classifiedscloud.io/1.36.3/_next/static/media/heavy-equipment.8ae5f265.webp",
  },
];

const Category = () => {
  return (
    <section className="category-section">
      <div className="category-section__image"></div>
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-section__item"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="category-section__overlay">
            <div className="category-section__title">{category.title}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
