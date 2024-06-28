import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__links-section">
          <div className="footer__links">
            <h3 className="footer__heading">kijiji</h3>
            <ul className="footer__list">
              <li className="footer__link">About</li>
              <li className="footer__link">Join Us</li>
              <li className="footer__link">Member Benefits</li>
              <li className="footer__link">Advertise on Kijiji</li>
            </ul>
          </div>
          <div className="footer__links">
            <h3 className="footer__heading">explore</h3>
            <ul className="footer__list">
              <li className="footer__link">Kijiji Autos</li>
              <li className="footer__link">Kijiji Central</li>
              <li className="footer__link">Tools to Promote Ads</li>
            </ul>
          </div>
        </div>
        <div className="footer__links-section">
          <div className="footer__links">
            <h3 className="footer__heading">info</h3>
            <ul className="footer__list">
              <li className="footer__link">Terms of Use</li>
              <li className="footer__link">Privacy Policy</li>
              <li className="footer__link">Posting Policy</li>
              <li className="footer__link">AdChoices</li>
            </ul>
          </div>
          <div className="footer__links">
            <h3 className="footer__heading">support</h3>
            <ul className="footer__list">
              <li className="footer__link">Help Desk</li>
              <li className="footer__link">Kijiji en Français</li>
              <li className="footer__link">Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__buttons">
        <div className="footer__download">
          <div className="footer__badges">
            <img
              className="footer__badge"
              src="src/assets/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt="Download on the App store button"
            />
          </div>
          <div className="footer__badges">
            <img
              className="footer__badge"
              src="src/assets/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
              alt="Get it on Google Play button"
            />
          </div>
        </div>
        <div className="footer__social">
          <img className="footer__icon" src="" alt="" />
          <img className="footer__icon" src="" alt="" />
          <img className="footer__icon" src="" alt="" />
          <img className="footer__icon" src="" alt="" />
          <img className="footer__icon" src="" alt="" />
        </div>
      </div>
      <p className="footer__copyright">
        All rights reserved. Google, Google Play, YouTube and other marks are
        trademarks of Google Inc.
      </p>
    </footer>
  );
}
