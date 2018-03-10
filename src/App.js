import React, { Component } from 'react';
import hotelsService from './services/hotelsService';
import Hotels from './components/hotels/hotels';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData: [],
      terms: {},
      loading: true
    }
    this.handleSubmit();
  }

  handleChange(e) {
    this.state.terms[e.target.name] = e.target.value;
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
      this.setState({loading: true});
    }
    hotelsService.getHotelsData(this.state.terms).then((data) => {
      this.setState({hotelsData: data.offers.Hotel || [], loading: false});
    });
  }

  resetSearch() {
    this.setState({terms: {}});
    Object.keys(this.refs).forEach((ref) => {
      this.refs[ref].value = '';
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#"><h3>Expedia Hotels</h3></a>
          </div>
        </nav>
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Search over a million hotels now!</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                  <div className="row">
                    <div className="col-12 col-md-12 mb-2 mb-md-0">
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        type="text"
                        className="form-control form-control-lg"
                        name="destinationName"
                        ref="destinationName"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 col-md-5">
                      <label className="form-control-label">Check-in</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        type="date"
                        className="form-control"
                        name="minTripStartDate"
                        ref="minTripStartDate"
                      />
                    </div>
                    <div className="col-4 col-md-5">
                      <label className="form-control-label">Check-out</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        type="date"
                        className="form-control"
                        name="maxTripStartDate"
                        ref="maxTripStartDate"
                      />
                    </div>
                    <div className="col-2 col-md-2">
                      <label className="form-control-label">Duration</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        type="number"
                        className="form-control"
                        name="lengthOfStay"
                        ref="lengthOfStay"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Min Star Rating</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        className="form-control"
                        type="number"
                        min="0"
                        max="5"
                        name="minStarRating"
                        ref="minStarRating"
                      />
                    </div>
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Max Star Rating</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        className="form-control"
                        type="number"
                        min="0"
                        max="5"
                        name="maxStarRating"
                        ref="maxStarRating"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Min Guest Rating</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        className="form-control"
                        type="number"
                        name="minGuestRating"
                        ref="minGuestRating"
                      />
                    </div>
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Max Guest Rating</label>
                      <input
                        onChange={(e) => {this.handleChange(e)}}
                        className="form-control"
                        type="number"
                        name="maxGuestRating"
                        ref="maxGuestRating"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Min Total Rate</label>
                      <input 
                        onChange={(e) => {this.handleChange(e)}}
                        title={this.state.terms.minTotalRate ? this.state.terms.minTotalRate.value : ''}
                        className="form-control"
                        type="range"
                        name="minTotalRate"
                        ref="minTotalRate"
                      />
                    </div>
                    <div className="col-2 col-md-6">
                      <label className="form-control-label">Max Total Rate</label>
                      <input 
                        onChange={(e) => {this.handleChange(e)}}
                        title={this.state.terms.maxTotalRate ? this.state.terms.maxTotalRate.value : ''}
                        className="form-control"
                        type="range"
                        name="maxTotalRate"
                        ref="maxTotalRate"
                      />
                    </div>
                   </div>
                  <div className="row">
                    <button type="submit" className="btn btn-block btn-lg btn-success">Search</button>
                    <a className="align-right" onClick={() => {this.resetSearch()}}>Reset search</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <section className="features-icons bg-light text-center">
          <div className="container">
            <Hotels hotelsData={this.state.hotelsData} loading={this.state.loading}></Hotels>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
