import "./FooterLinks.scss";

export default function LinkList(props) {
  const { heading, item } = props;
  return (
    <div className="footer-links">
      <h2 className="footer-links__heading">{heading}</h2>
    </div>
  );
}
