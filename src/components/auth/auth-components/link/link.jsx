import { Link } from "react-router-dom";

import Arrow from "../../../../icons/auth/arrow.svg";

import "./link.scss";

export const LinkTo = ({ question, link, path }) => {
  return (
    <div className="next-move-question">
      {question}
      <Link to={`/api/auth/${path}`} className="logIn-link">
        {link}
        <div>
          <img src={Arrow} alt="alt" />
        </div>
      </Link>
    </div>
  );
};
