import "./Verify.scss";
import clarify from "../../assets/images/clarity.png";
import upload from "../../assets/images/upload.png";
const Verify = () => {
  return (
    <div className="verify-identity">
      <h1 className="verify-identity__title">Verify your identity</h1>
      <p className="verify-identity__subtitle">
        Attract more buyers and increase your sales potential with a verified
        badge
      </p>
      <p className="verify-identity__verify">Verify your identity using</p>
      <div className="verify-identity__methods">
        <button className="verify-identity__button">Business ID</button>
        <button className="verify-identity__button">Drivers license</button>
        <button className="verify-identity__button">Passport</button>
      </div>
      <div className="verify-identity__section">
        <label className="verify-identity__label">Front side</label>
        <div className="verify-identity__upload">
          <img src={clarify} className="verify-identity__upload-icon" />
          <div className="verify-identity__upload-text">
            identity_front.pdf <span>134kb - Uploading 34%</span>
          </div>
        </div>
      </div>
      <div className="verify-container">
        <label className="verify-container__label">Back side</label>
        <div className="verify-container__upload">
          <img src={upload} className="verify-container__upload-icon" />
          <div className="verify-container__upload-placeholder">
            <p className="verify-container__upload-text">
              <span className="verify-container__upload-text-bold">
                Click to upload
              </span>
              {""} or drag and drop
            </p>
            <p className="verify-container__upload-subtext">
              Ensure your document is in good condition and readable
            </p>
          </div>
        </div>
      </div>
      <div className="verify-container__actions">
        <div className="verify-container__cancel">
          <button className="verify-container__cancel-continue">Cancel</button>
        </div>
        <div className="verify-container__buttons">
          <button className="verify-container__back">Back</button>
          <button className="verify-container__continue">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
