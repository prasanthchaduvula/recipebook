import React from 'react';
import Loader from './Loader';
import { withRouter, Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      items: ''
    };
  }
  componentDidMount() {
    let handle = this.props.match.params.meals;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${handle}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ loading: false, items: data.meals });
      });
  }
  render() {
    let handle = this.props.match.params.meals;
    let { loading, items } = this.state;
    if (loading) return <Loader />;
    return (
      <section>
        <div className="wrapper">
          <Link to="/" className="close-btn-box">
            <IoMdClose className="close-btn" />
          </Link>
          <p className="subhead">{handle}</p>
          <div className="menu">
            {items ? (
              items.map(item => (
                <Link to={`/meals/${item.idMeal}`}>
                  <div className="menu-item">
                    <div className="menuitem-img">
                      <img src={item.strMealThumb} alt="" />
                    </div>
                    <p className="menu-text">{item.strMeal}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="subhead">No Items</p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Menu);
