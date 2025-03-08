import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/RecomendationRecipesCards.css';

function RecomendationRecipesCards({ recipeType }) {
  const [recomendationsItems, setRecomendationsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxCardsOnPage = 6;

  useEffect(() => {
    const getRecommendations = async () => {
      setLoading(true);
      try {
        // Determine which API to call based on recipe type
        const url = recipeType === 'comidas'
          ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
          : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        
        const response = await fetch(url);
        const data = await response.json();
        
        // Log the raw data to see its structure
        console.log('Raw API response:', data);
        
        // Transform the data into an array regardless of its structure
        let resultsArray = [];
        
        if (recipeType === 'comidas' && data.drinks) {
          resultsArray = Array.isArray(data.drinks) ? data.drinks : [data.drinks];
        } else if (recipeType !== 'comidas' && data.meals) {
          resultsArray = Array.isArray(data.meals) ? data.meals : [data.meals];
        }
        
        console.log('Transformed array:', resultsArray);
        setRecomendationsItems(resultsArray);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setRecomendationsItems([]);
      } finally {
        setLoading(false);
      }
    };
    
    getRecommendations();
  }, [recipeType]);

  // Configure the correct properties based on recipe type
  const config = recipeType === 'comidas'
    ? {
        title: 'strDrink',
        url: 'bebidas',
        idKey: 'idDrink',
        thumbKey: 'strDrinkThumb'
      }
    : {
        title: 'strMeal',
        url: 'comidas',
        idKey: 'idMeal',
        thumbKey: 'strMealThumb'
      };

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  // Take only the first maxCardsOnPage items
  const recomendationsLimited = recomendationsItems.slice(0, maxCardsOnPage);

  return (
    <div className="recomendations">
      {recomendationsLimited.length > 0 ? (
        recomendationsLimited.map((item, index) => (
          <Link
            key={index}
            to={`/${config.url}/${item[config.idKey]}`}
            data-testid={`${index}-recomendation-card`}
            className="recomendation-card"
          >
            <img
              src={item[config.thumbKey]}
              alt={item[config.title]}
            />
            <p data-testid={`${index}-recomendation-title`}>{item[config.title]}</p>
          </Link>
        ))
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
}

RecomendationRecipesCards.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default RecomendationRecipesCards;