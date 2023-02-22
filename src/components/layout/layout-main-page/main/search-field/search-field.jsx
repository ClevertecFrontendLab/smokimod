import SearchIcon from "../../../../../icons/glass_icon.svg";

import "./search-field.scss";

export const SearchField = ({
  setSearchParam,
  searchParam,
  showSeacthBar,
  toggleShowBar,
  sortByRating,
  setSortByRating,
}) => {
  return (
    <div className="search-container">
      <button
        type="button"
        className={showSeacthBar ? "seacrh-button disable" : "seacrh-button"}
        onClick={toggleShowBar}
        data-test-id="button-search-open"
      >
        <img src={SearchIcon} alt="buuton-glass" />
      </button>
      <label
        htmlFor="btn-autor"
        className={showSeacthBar ? "icon-autor disable" : "icon-autor"}
      >
        <input
          type="search"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam}
          className="btn-autor"
          placeholder="Поиск книги или автора..."
        />
      </label>
      <label
        htmlFor="btn-raiting"
        onClick={() => setSortByRating(!sortByRating)}
        className={
          showSeacthBar
            ? "icon-rating disable"
            : sortByRating
            ? "icon-rating toggle"
            : "icon-rating"
        }
      >
        <button type="text" className="btn-raiting">
          По рейтингу
        </button>
      </label>
    </div>
  );
};
