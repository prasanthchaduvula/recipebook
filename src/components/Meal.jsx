import React from 'react';
import Loader from './Loader';
import { withRouter, Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

class Meal extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      meals: [],
      ingradinets: []
    };
  }
  componentDidMount() {
    let handle = this.props.match.params.id;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${handle}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals[0]);

        for (let i = 0; i <= 20; i++) {
          if (data.meals[0][`strIngredient${i}`]) {
            this.setState({
              ingradinets: this.state.ingradinets.concat(
                ` ${data.meals[0][`strIngredient${i}`]} - ${
                  data.meals[0][`strMeasure${i}`]
                }`
              )
            });
          }
        }
        this.setState({ loading: false, meals: data.meals });
      });
  }
  render() {
    let { loading, meals, ingradinets } = this.state;
    if (loading) return <Loader />;
    return (
      <section>
        <div className="wrapper">
          <Link to="/" className="close-btn-box">
            <IoMdClose className="close-btn" />
          </Link>
          {meals
            ? meals.map(meal => (
                <div>
                  <p className="subhead">{meal.strMeal}</p>
                  <div className="meal">
                    <div className="meal-img">
                      <img src={meal.strMealThumb} alt="" />
                    </div>
                    <div className="meal-items">
                      <p className="meal-subhead">Ingredients</p>
                      {ingradinets.map(ing => (
                        <p className="ingradinets">{ing}</p>
                      ))}
                    </div>
                  </div>
                  <div className="meal-inst">
                    <p className="meal-subhead">Instructions</p>
                    <p className="meal-inst-para">{meal.strInstructions}</p>
                  </div>
                  <div className="meal-inst">
                    <p className="meal-subhead">Video Recipe</p>
                    <iframe
                      width="100%"
                      height="560"
                      src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                        -11
                      )}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen={1}
                      title="youtube"
                    ></iframe>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </section>
    );
  }
}

export default withRouter(Meal);
