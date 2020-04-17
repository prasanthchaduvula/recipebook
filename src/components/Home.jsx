import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      bgcolors: [
        '#FF2164',
        '#FF893D',
        '#04D688',
        '#3bade4',
        '#414345',
        '#3D7EAA',
        '#1CD8D2',
        '#232526',
        '#134E5E',
        '#2BC0E4',
        '#4776E6',
        '#8E54E9',
        '#516395',
        '#3A6073'
      ]
    };
  }

  render() {
    var { categories, areas } = this.props;
    let { bgcolors } = this.state;
    return (
      <section className="home">
        <div className="wrapper">
          <p className="subhead">Popular Categoires</p>
          <div className="categoires">
            {categories.map((category, index) => (
              <Link to={`/categories/${category.strCategory}`} key={index}>
                <li
                  className="category"
                  style={{ background: `${bgcolors[index]}` }}
                >
                  {category.strCategory}
                </li>
              </Link>
            ))}
          </div>
          <p className="subhead">Popular Areas</p>
          <div className="categoires">
            {areas.map((area, index) => (
              <Link to={`/areas/${area.strArea}`} key={index}>
                <li
                  className="category "
                  style={{ background: `#eef2f3`, color: 'black' }}
                >
                  {area.strArea}
                </li>
              </Link>
            ))}
          </div>
          <p className="subhead">Browse Name</p>
          <div className="alphabets">
            {[
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
              'U',
              'V',
              'W',
              'X',
              'Y',
              'Z'
            ].map((alphabet, index) => (
              <Link to={`/alphabets/${alphabet}`} key={index}>
                <li className="alphabet">{alphabet}</li>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
