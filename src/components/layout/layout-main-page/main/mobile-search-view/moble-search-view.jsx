import crossIcon from "../../../../../icons/creset_icon.svg";

import "../main-page.scss";

export const MobileSearchView = ({ showSeacthBar, toggleShowBar }) => {
  return (
    <div
      className={
        showSeacthBar
          ? "search-input-container"
          : "search-input-container disabled"
      }
    >
      <input
        className="search-input"
        placeholder="Поиск книги или автора..."
        type="text"
        data-test-id="input-search"
      />
      <button
        type="button"
        className="cross-button"
        data-test-id="button-search-close"
      >
        <img
          src={crossIcon}
          alt="cross-icon"
          onClick={toggleShowBar}
          role="presentation"
        />
      </button>
    </div>
  );
};
