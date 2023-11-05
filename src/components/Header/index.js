import { useNavigate } from 'react-router-dom';
import { IconBar, IconSearch } from "../icons";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useState } from 'react';
function Header() {
  const navigate = useNavigate();
  const [keywork,setKeywork]=useState('')
  const [showBar,setShowBar]=useState(false)
  function handleSearch(e){
    e.preventDefault();
    navigate(`/movie/search/?type=search&name=${keywork}`);
  }
  function handleOnchang(e){
    setKeywork(e.target.value)
  }

  function handleShowMenu(){
    setShowBar(!showBar)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="body">
          <IconBar onClick={handleShowMenu}/>
          <Logo />
          <NavBar isbar={showBar} handleShowMenu={handleShowMenu}/>
          <div className="main-action">
            <div className="mainSearch false">
              <form className="search-box" onSubmit={handleSearch}>
                <input
                onChange={handleOnchang}
                  placeholder="search.."
                  className="input"
                  name="text"
                  type="text"
                  defaultValue=""

                />
                <button className="search-btn">
                  <IconSearch />
                </button>
              </form>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="icon-search-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
