import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { infoSliceActions } from '../store/info-slice';
import Navbar from './Navbar';

export default function CheckoutButton() {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    dispatch(infoSliceActions.addDetails(info));
    navigate('/purchase');
  };

  return (
    <div>
      <Navbar />
      <div
        className="container-fluid p-5"
        style={{ margin: 'auto', width: '60%', backgroundColor: '#f4dacd' }}
      >
        <h1 className="mb-5 text-center">Contact Information</h1>
        <form class="row g-3" onSubmit={submitHandler}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              name="email"
              onChange={changeHandler}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              name="name"
              onChange={changeHandler}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              name="address1"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={changeHandler}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              name="address2"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={changeHandler}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              name="city"
              onChange={changeHandler}
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select
              id="inputState"
              class="form-select"
              name="state"
              onChange={changeHandler}
              required
            >
              <option selected>Choose...</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Andhra Pradesh</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="inputZip"
              name="zip"
              onChange={changeHandler}
              required
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-lg float-end">
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
