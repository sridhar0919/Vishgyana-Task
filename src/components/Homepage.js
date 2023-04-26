import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { mealItemActions } from '../store/mealitem-slice';

import './css/Homepage.css';
import Navbar from './Navbar';

export default function Homepage() {
  const [items, setItems] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealItems = useSelector((state) => state.mealItem.items);

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
        .then((res) => {
          dispatch(mealItemActions.addItem(res.data.meals.slice(0, 10)));
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center text-uppercase text-primary">Menu items</h1>
      </div>
      <div className="container-fluid">
        <div id="main-card">
          {mealItems &&
            mealItems.map((item, index) => {
              return (
                <div className="card mb-3" style={{ width: '15rem' }}>
                  <img
                    src={item.strMealThumb}
                    className="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.strMeal}</h5>
                    <a
                      onClick={(e) => {
                        navigate(`/menucontent/${item.idMeal}`);
                      }}
                      class="btn btn-primary"
                    >
                      View more
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
