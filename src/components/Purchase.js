import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './css/Purchase.css';
import { mealItemActions } from '../store/mealitem-slice';
import { infoSliceActions } from '../store/info-slice';
import Navbar from './Navbar';

export default function Purchase() {
  const address = useSelector((state) => state.info.details[0]);
  const item = useSelector((state) => state.mealItem.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.onload = function () {
      dispatch(mealItemActions.emptyItem());
      dispatch(infoSliceActions.emptyDetails());
      navigate('/');
    };
  });

  let isDisplay = address && item;

  return (
    <div>
      <Navbar />
      {isDisplay && (
        <div
          className="container-fluid mx-auto purchase-section"
          style={{ width: '50%', backgroundColor: '#f4dacd' }}
        >
          <h1 className="text-uppercase text-center p-3 text-success">
            &#x2713; Purchased!!!
          </h1>
          <div className="dish-section">
            <div>
              <img src={item[0].strMealThumb} alt="loading..." />
            </div>
            <div className="mt-3">
              <h3 className="text-uppercase text-primary">Dish details</h3>
              <h5>{item[0].strMeal}</h5>
              <p className="d-inline">Category : {item[0].strCategory}</p>
              <p>Area: {item[0].strArea}</p>
            </div>
          </div>
          <h3 className="text-uppercase text-primary mt-3 text-center">
            Contact Info
          </h3>
          <div className="contact-info">
            <div>
              <h5 className="text-uppercase">General Info</h5>
              <p className="d-inline">Name : {address.name}</p>
              <p>Email : {address.email}</p>
            </div>
            <div>
              <h5 className="text-uppercase">Address</h5>
              <p className="d-inline">{address.address1}</p>
              <p>
                {address.city},{address.state}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
