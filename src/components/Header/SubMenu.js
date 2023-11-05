import { Link } from "react-router-dom";

function SubMenu({ name, id, type, handleShowMenu }) {
  return (
    <Link
      to={`/movie/${id}?type=${type}&name=${name}`}
      key={id}
      className="menu-item "
      onClick={handleShowMenu}
    >
      <p className="line-camp">{name}</p>
    </Link>
  );
}

export default SubMenu;
