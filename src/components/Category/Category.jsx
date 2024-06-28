import "./Category.scss";

const categories = [
  { title: "Cars & Trucks" },
  { title: "Classic Cars" },
  { title: "RV's, Campers & Trailers" },
  { title: "Boats & Watercraft" },
  { title: "Motorcycles" },
  { title: "Vehicle Parts, Tires, & Accessories" },
  { title: "Heavy Equipment" },
  { title: "Heavy Equipment" },
];
const Category = () => {
  return (
    <section className="category-section">
      {categories.map((category, index) => (
        <div key={index} className="category-section__item">
          <div className="category-section__overlay">
            <div className="category-section__title">{category.title}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
