import { getShortAddress } from '../service/string'

const Header = (props) => {
  const { address, connect } = props
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src="images/logo.png" className="logo" />
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
