import logo from '../../assets/image/logo.png'
import logo1 from '../../assets/image/logo1.png'

function Logo() {
    return (<a className="logo" href="/">
    <img className='logo' src={logo} alt="logo" />
    <img className='logo2' src={logo1} alt="logo" />
  </a>);
}

export default Logo;