import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mealItemActions } from '../store/mealitem-slice';
import { useDispatch } from 'react-redux';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div style={{ width: '100%' }}>
      <nav class="navbar navbar-light bg-primary justify-content-between mb-3 p-3">
        <a
          className="navbar-brand ml-3"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(mealItemActions.emptyItem());
            navigate('/');
          }}
        >
          FOOD-RECIPE
        </a>
      </nav>
    </div>
  );
}
