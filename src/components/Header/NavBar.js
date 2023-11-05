import { useSelector } from "react-redux";
import { IconDown } from "../icons";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

function NavBar({isbar,handleShowMenu}) {
  let { lists: listCaterogy } = useSelector(
    (state) => state.orther.listCaterogy
  );
  let { lists: listCountry } = useSelector((state) => state.orther.listCoutry);

  return (
    <nav className={`nav ${isbar?'show':''}`}>
      <ul className="nav-menu">
        <li className="menu-item ">
          <p>Thể loại</p>
          <IconDown />
          <ul className="sub-menu">
            {listCaterogy.map((item) => {
              return (
                <SubMenu
                handleShowMenu={handleShowMenu}
                  type="caterogy"
                  key={item.id}
                  name={item.name}
                  id={item.id}
                />
              );
            })}
          </ul>
        </li>
        <li className="menu-item ">
          <p>Quốc gia</p>
          <IconDown />
          <ul className="sub-menu">
            {listCountry.map((item) => (
              <SubMenu
              type='country'
                key={item.iso_3166_1}
                name={item.native_name}
                id={item.iso_3166_1}
              />
            ))}
          </ul>
        </li>
        <Link to={`/movie/topview?type=topview&name=Phim hot hôm nay`} className="menu-item ">
          <p >Topviews</p>
        </Link>
        {/* <li className="menu-item ">
          <p>phim chiếu rạp</p>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
