import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import './css/CardCatalog.css';

function CardCatalog() {
  const { catalog, setCatalog } = useContext(GlobalContext);

  const supplyIdentity = catalog && typeof catalog === 'object' ? Object.keys(catalog)[0] : null;

  const maxCardsOnPage = 12;
  
  // Versão mais segura para definir catalogLimited
  const catalogLimited = (() => {
    // Verifica se catalog e supplyIdentity existem
    if (!catalog || !supplyIdentity) return [];
    
    // Verifica se catalog[supplyIdentity] existe e é um array
    const data = catalog[supplyIdentity];
    if (!data) return [];
    
    // Se for um array, faz o slice, caso contrário, retorna array vazio
    return Array.isArray(data) ? data.slice(0, maxCardsOnPage) : [];
  })();

  function renderMealsCards() {
    return catalogLimited.map((food, index) => (
      <Link
        key={ index }
        to={ `/comidas/${food.idMeal}` }
      >
        <div 
        data-testid={ `${index}-recipe-card` } 
        className="supply-card"
        style={{ backgroundColor: '#eaeaea' }}
        >
          <div data-testid={ `${index}-card-name` }>
            <h1>{food.strMeal}</h1>
          </div>
          <img
            className="supply-img"
            src={ food.strMealThumb }
            alt={ food.strMeal }
            data-testid={ `${index}-card-img` }
          />
        </div>
      </Link>
    ));
  }

  function renderDrinksCards() {
    return catalogLimited.map((drink, index) => (
      <Link
        key={ index }
        to={ `/bebidas/${drink.idDrink}` }
      >
        <div data-testid={ `${index}-recipe-card` } 
        className="supply-card"
        style={{ backgroundColor: '#eaeaea' }}
        >
          <div
            data-testid={ `${index}-card-name` }
          >
            <h1>{drink.strDrink}</h1>
          </div>
          <img
            className="supply-img"
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
        </div>
      </Link>
    ));
  }

  useEffect(() => () => setCatalog(''), [setCatalog]);



  return (
    <div>
      {supplyIdentity === 'meals' ? renderMealsCards() : renderDrinksCards()}
    </div>
  );
}

export default CardCatalog;