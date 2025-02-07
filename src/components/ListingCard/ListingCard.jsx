import "./ListingCard.scss";

export default function ListingCard(props) {
  const { img, alt, price, title, location, date, description } = props;
  return (
    <div className="listing-card">
      <div className="listing-card__image-container">
        <img className="listing-card__image" src={img} alt={alt} />
      </div>
      <div className="listing-card__container">
        <div className="listing-card__text-container">
          <div className="listing-card__price-container">
            <p className="listing-card__price">{price}</p>
          </div>
          <h3 className="listing-card__title">{title}</h3>
          <div className="listing-card__details">
            <p className="listing-card__location">{location}</p>
            <p className="listing-card__date">{date}</p>
          </div>
          <div className="listing-card__badge-container">
            <img
              className="listing-card__badge"
              src="src/assets/icons/smallbusiness.png"
              alt="small business tag"
            />
            <img
              className="listing-card__icon"
              src="src/assets/icons/verify.png"
              alt="check mark on badge"
            />
          </div>
          <p className="listing-card__description">{description}</p>
        </div>
        <div className="listing-card__icon-container">
          <img
            className="listing-card__icon"
            src="src/assets/icons/like.svg"
            alt="heart icon"
          />
          <img
            className="listing-card__icon"
            src="src/assets/icons/sm-bus.svg"
            alt="small business badge"
          />
        </div>
      </div>
    </div>
  );
}
