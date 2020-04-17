import React from 'react';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      items: ''
    };
  }

  handleClose = () => {
    this.props.handleActive(false);
  };

  handleSearch = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.searchValue}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ items: data.meals, searchValue: '' });
      });
  };

  render() {
    var { searchValue, items } = this.state;
    return (
      <section>
        <form>
          <div className="wrapper">
            <div className="search-page ">
              <div className="searchbox">
                <input
                  className="searchinput"
                  type="text"
                  name="searchValue"
                  placeholder="Search Recipe"
                  value={searchValue}
                  onChange={this.handleSearch}
                />
                <input
                  onClick={this.handleSubmit}
                  className="search-submit"
                  type="submit"
                  value=""
                />
                <div onClick={this.handleSubmit}>
                  <IoIosSearch className="searchicon" />
                </div>
                <div onClick={this.handleClose}>
                  <IoMdClose className="searchicon" />
                </div>
              </div>
              <div className="menu">
                {items ? (
                  items.map(item => (
                    <div onClick={this.handleClose}>
                      <Link to={`/meals/${item.idMeal}`}>
                        <div className="menu-item">
                          <div className="menuitem-img">
                            <img src={item.strMealThumb} alt="" />
                          </div>
                          <p className="menu-text">{item.strMeal}</p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="subhead">No Results</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
