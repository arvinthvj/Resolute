import React from "react";
import "./navbar.css";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import pic from "./resol.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MenuItem from "@material-ui/core/MenuItem";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
function Navbar() {
  return (
    <div className="navbar">
      <img src={pic} />
      <div className="navbar__ptags">
        <Button aria-controls="simple-menu" aria-haspopup="true">
          <span className="navbar__span1">
            <DoubleArrowIcon />
            Solutions
          </span>
        </Button>
        <Link to="/Product">
          <Button>
            <span className="navbar__span2">
              <AddShoppingCartIcon />
              Products
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
