import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Search.css';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
    };
  }
  render() {
    return (
      <div class="section section-search">
        <div className="search-container">
          <p class="lead">Self Drive Car Rental</p>

          <p class="lead-2">Book your Car now!</p>

          <div class="search">
            <Popup
              trigger={
                <button className="city pickup">
                  {/* <i className="fas fa-map-marker-alt"></i> */}
                  <div className="city-wrapper">
                    <div className="search-result">Select City</div>
                  </div>
                </button>
              }
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="header"> Select your pick up city </div>
                  <div className="actions">
                    <Popup
                      trigger={
                        <button className="city-name"> Bangalore </button>
                      }
                      modal
                      closeOnDocumentClick
                    >
                      <div class="city-area-container">
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                        <button class="city-area">Pete area</button>
                        <button class="city-area">Shivajinagar</button>
                        <button class="city-area">Vasanth Nagar</button>
                        <button class="city-area">Malleswaram</button>
                        <button class="city-area">Indiranagar</button>
                      </div>
                    </Popup>

                    <Popup
                      trigger={<button className="city-name"> Mumbai </button>}
                      modal
                      closeOnDocumentClick
                    >
                      <div class="city-area-container">
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                        <button class="city-area">Pete area</button>
                        <button class="city-area">Shivajinagar</button>
                        <button class="city-area">Vasanth Nagar</button>
                        <button class="city-area">Malleswaram</button>
                        <button class="city-area">Indiranagar</button>
                      </div>
                    </Popup>

                    <Popup
                      trigger={<button className="city-name"> Pune </button>}
                      modal
                      closeOnDocumentClick
                    >
                      <div class="city-area-container">
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                        <button class="city-area">Pete area</button>
                        <button class="city-area">Shivajinagar</button>
                        <button class="city-area">Vasanth Nagar</button>
                        <button class="city-area">Malleswaram</button>
                        <button class="city-area">Indiranagar</button>
                      </div>
                    </Popup>

                    <Popup
                      trigger={<button className="city-name"> Delhi </button>}
                      modal
                      closeOnDocumentClick
                    >
                      <div class="city-area-container">
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                        <button class="city-area">Pete area</button>
                        <button class="city-area">Shivajinagar</button>
                        <button class="city-area">Vasanth Nagar</button>
                        <button class="city-area">Malleswaram</button>
                        <button class="city-area">Indiranagar</button>
                      </div>
                    </Popup>
                  </div>
                </div>
              )}
            </Popup>
            {/* Date and time pick up */}

            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="picker"
                placeholderText="From - Date and Time"
              />
            </div>
            {/* Date and time dropoff */}
            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="picker"
                placeholderText="To - Date and Time"
              />
            </div>

            <div className="find-button">
              <button class="find">Find</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
