import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="hero">
          <img src="recipe-blog-banner.png" alt="" />
          <div>
            <p className="hero-text">Find the recipes you love to taste</p>
            <p className="hero-subtext">
              explore | Ingredients | watch recipe video{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
