import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__notify">
        <label className="sidebar__label">
          Notify me when new ads are posted
        </label>
        <label className="sidebar__switch">
          <input type="checkbox" />
          <span className="sidebar__slider"></span>
        </label>
      </div>
      <div className="sidebar__filters">
        <h3 className="sidebar__heading">Filters</h3>
        <div className="sidebar__filter">
          <label className="sidebar__filter-label">Category</label>
          <select className="sidebar__select">
            <option value="All Categories">All Categories</option>
            <option value="Buy/Sell">Buy/Sell</option>
            <option value="Services">Services</option>
            <option value="Jobs">Jobs</option>
          </select>
        </div>
        <div className="sidebar__filter">
          <label className="sidebar__filter-label">Location</label>
          <select className="sidebar__select">
            <option value="Canada Ontario"> Ontario</option>
            <option value="Canada Quebec"> Quebec</option>
          </select>
        </div>
        <div className="sidebar__filter">
          <label className="sidebar__filter-label">Price</label>
          <div className="sidebar__price">
            <input
              type="number"
              className="sidebar__price-input"
              placeholder="from"
            />
            <input
              type="number"
              className="sidebar__price-input"
              placeholder="to"
            />
          </div>
          <button className="sidebar__apply-button">Apply</button>
        </div>
        <div className="sidebar__filter">
          <label className="sidebar__filter-label">Offer type</label>
          <div className="sidebar__offer">Offering</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
