import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick = () => {
    this.props.handleActive(true);
  };

  render() {
    return (
      <header>
        <div className="wrapper">
          <nav className="navmenu">
            <li>
              <Link to="/" className="logo">
                RECIPE BOOK
              </Link>
            </li>
            <li>
              <IoIosSearch className="search-icon" onClick={this.handleClick} />
            </li>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
