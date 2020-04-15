import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Search.css';

export class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <p class="lead">Rent a self drive car</p>
        <div class="search">
          {/* Pick up */}
          <Popup
            trigger={
              <button className="city pickup">
                <i className="fas fa-map-marker-alt"></i>
                <div className="city-wrapper">
                  <p className="city-lead">Pickup Point</p>
                  <div className="search-result">Bangalore, Airport</div>
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
                    trigger={<button className="city-name"> Bangalore </button>}
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

          {/* Drop off 
          <Popup
            trigger={
              <button className="city dropoff">
                <i className="fas fa-map-marker-alt"></i>
                <div className="city-wrapper">
                  <p className="city-lead">Dropoff Point</p>
                  <div className="search-result">Bangalore, Airport</div>
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
                <div className="header"> Select your dropoff city </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="city-name"> Bangalore </button>}
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
          </Popup> */}
        </div>
      </div>
    );
  }
}

export default Search;
