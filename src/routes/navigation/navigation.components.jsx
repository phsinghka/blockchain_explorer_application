import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/blockchain-icon.svg";
import "./navigation.styles.css";

const NavigationBar = () => {
  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/transactions">
            Transactions
          </Link>
          <Link className="nav-link" to="/transfer">
            Transfer
          </Link>
          <Link className="nav-link" to="/addresses">
            Addresses
          </Link>
          <Link className="nav-link" to="/wallet">
            Wallet
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
