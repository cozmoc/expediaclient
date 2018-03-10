import React, { Component } from 'react';
import './hotels.css';

class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: []
    }
  }

  map(hotel, i) {
    if (this.state.showMap[i]) {
      return (
        <iframe
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQZV0zCkCtWgABm5ISzgcZdD-_wRHBboU&q=${hotel.hotelInfo.hotelLatitude},${hotel.hotelInfo.hotelLongitude}`} allowFullScreen>
        </iframe>
      );
    }
  }

  changeMapStatus(i) {
    this.state.showMap[i] = !this.state.showMap[i];
    this.setState({showMap: this.state.showMap})
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-wrap align-content-between portfolio-item">
          {
            this.props.hotelsData.map((hotel, i) => {
              return (
                <div key={i} className="card">
                  <a href={decodeURIComponent(hotel.hotelUrls.hotelInfositeUrl)} target="_blank"><img className="card-img-top hotel-img" src={hotel.hotelInfo.hotelImageUrl} /></a>
                  <div className="card-block">
                    <a href={decodeURIComponent(hotel.hotelUrls.hotelInfositeUrl)} target="_blank"><h4 className="card-title">{hotel.hotelInfo.hotelName} / {hotel.destination.city}</h4></a>
                    <div className="d-flex" style={{justifyContent: 'space-between'}}>
                      <span>{hotel.hotelInfo.hotelCity}</span>
                      <span>Rating: {hotel.hotelInfo.hotelStarRating}</span>
                    </div>
                    <p style={{'fontSize': '20px'}}>{hotel.hotelPricingInfo.currency}
                      <span style={{color: 'red'}}>{hotel.hotelPricingInfo.originalPricePerNight}</span>
                      <span style={{color:'blue','fontSize': '10px'}}>{hotel.hotelPricingInfo.percentSavings && ' Saving %' + hotel.hotelPricingInfo.percentSavings}</span>
                    </p>
                    <span style={{fontSize: '15px'}}>Ends in {hotel.offerDateRange.travelEndDate.join('/')}</span>
                  </div>
                  {this.map(hotel, i)}
                  <button className="btn btn-primary btn-xs" onClick={() => {this.changeMapStatus(i)}}>Show on map</button>
                </div>
              )
            })
          }
        </div>
        {!this.props.hotelsData.length && <h1 className="text-center">{this.props.loading ? 'Please wait..' : 'Sorry, no results found'}</h1>}
      </div>
    );
  }
}

export default Hotels;