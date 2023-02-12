"use client";

const SearchBar = () => {
  return (
    <div
      tabIndex={0}
      className="collapse-plus rounded-box collapse mb-4 border border-base-300 bg-base-100"
    >
      <div className="collapse-title text-xl font-medium">Filter</div>
      <div className="form-control collapse-content">
        <div className="items flex flex-col md:flex-row">
          <label className="flex-0 input-group m-2">
            <span>Tags</span>
            <input
              type="text"
              placeholder="tags"
              className="input-bordered input focus:outline-primary"
            />
          </label>
          <label className="input-group m-2">
            <span>Full text search</span>
            <input
              type="text"
              placeholder="text"
              className="input-bordered input focus:outline-primary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
