import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Loader from './Loader';
import Home from './Home';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import Meal from './Meal';
import Menu from './Menu';
import Area from './Area';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Loading: true,
      categories: [],
      areas: [],
      items: [],
      searchActive: false
    };
  }

  fetchCatagory() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(data => {
        this.setState({ Loading: false, categories: data.meals });
      });
  }
  fetchAreas() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(res => res.json())
      .then(data => {
        this.setState({ Loading: false, areas: data.meals });
      });
  }

  handleActive = value => {
    this.setState({ searchActive: value });
  };

  componentDidMount() {
    this.fetchCatagory();
    this.fetchAreas();
  }
  render() {
    let { Loading, categories, areas, searchActive } = this.state;
    return (
      <div>
        {Loading ? (
          <Loader />
        ) : (
          <>
            {searchActive ? <Search handleActive={this.handleActive} /> : ''}
            <div className="app">
              <Header handleActive={this.handleActive} />
              <div className="main-section">
                <Route exact path="/">
                  <Hero />
                  <Home categories={categories} areas={areas} />
                </Route>
                <Route exact path="/categories/:meals">
                  <Categories />
                </Route>
                <Route exact path="/areas/:meals">
                  <Area />
                </Route>
                <Route exact path="/alphabets/:meals">
                  <Menu />
                </Route>
                <Route exact path="/meals/:id">
                  <Meal />
                </Route>
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
