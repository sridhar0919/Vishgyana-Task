import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './css/Menucontent.css';
import { mealItemActions } from '../store/mealitem-slice';
import Navbar from './Navbar';

export default function Menucontent() {
  let { idMeal } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mealItem = useSelector((state) => state.mealItem.items);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => {
        dispatch(mealItemActions.addItem(res.data.meals[0]));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  console.log(mealItem);

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        {mealItem.length === 1 && (
          <div id="main-container">
            <h1 className="mb-3 text-uppercase" style={{ color: '#6f716b' }}>
              {mealItem[0].strMeal}
            </h1>
            <ul className="sub-category">
              <li>
                <span style={{ color: '#0053a6' }}>Category: </span>
                {mealItem[0].strCategory}
              </li>
              <li>
                <span style={{ color: '#0053a6' }}>Area: </span>{' '}
                {mealItem[0].strArea}
              </li>
            </ul>
            <img
              src={mealItem[0].strMealThumb}
              alt="Loading.."
              className="content-img"
            />
            <div className="ingredient-section">
              <h3 style={{ color: '#0053a6' }}>Ingredients</h3>
              <ul>
                <li>{mealItem[0].strIngredient1}</li>
                <li>{mealItem[0].strIngredient2}</li>
                <li>{mealItem[0].strIngredient3}</li>
                <li>{mealItem[0].strIngredient4}</li>
                <li>{mealItem[0].strIngredient5}</li>
                <li>{mealItem[0].strIngredient6}</li>
                <li>{mealItem[0].strIngredient7}</li>
                <li>{mealItem[0].strIngredient8}</li>
                <li>{mealItem[0].strIngredient9}</li>
                <li>{mealItem[0].strIngredient10}</li>
              </ul>
            </div>
            <div className="instruction-section">
              <h3 style={{ color: '#0053a6' }}>Cooking Method</h3>
              <p>{mealItem[0].strInstructions}</p>
            </div>
            <div>
              <button
                class="btn btn-primary btn-lg float-end mb-5"
                type="submit"
                onClick={() => {
                  navigate('/checkout-form');
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
