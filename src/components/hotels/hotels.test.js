import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Hotels from './hotels';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

const hotelsData = [
  {
    "offerDateRange": {
      "travelStartDate": [
        2018,
        4,
        12
      ],
      "travelEndDate": [
        2018,
        4,
        15
      ],
      "lengthOfStay": 3
    },
    "destination": {
      "regionID": "178286",
      "associatedMultiCityRegionId": "178286",
      "longName": "Miami (and vicinity), Florida, United States of America",
      "shortName": "Miami",
      "country": "United States of America",
      "province": "Florida",
      "city": "Miami",
      "tla": "FLL",
      "nonLocalizedCity": "Miami"
    },
    "hotelInfo": {
      "hotelId": "21973653",
      "hotelName": "Villa Lunablu",
      "localizedHotelName": "Villa Lunablu",
      "hotelDestination": "North Miami Beach",
      "hotelDestinationRegionID": "55169",
      "hotelLongDestination": "North Miami Beach,FL,USA",
      "hotelStreetAddress": "19921 NE 20th Ct",
      "hotelCity": "North Miami Beach",
      "hotelProvince": "FL",
      "hotelCountryCode": "USA",
      "hotelLatitude": 25.95986,
      "hotelLongitude": -80.16008,
      "hotelStarRating": "3.5",
      "hotelGuestReviewRating": 0,
      "hotelReviewTotal": 0,
      "hotelImageUrl": "https://images.trvl-media.com/hotels/22000000/21980000/21973700/21973653/3e11d449_t.jpg",
      "vipAccess": false,
      "isOfficialRating": false
    },
    "hotelPricingInfo": {
      "averagePriceValue": 500,
      "totalPriceValue": 1500,
      "crossOutPriceValue": 2000,
      "originalPricePerNight": 2000,
      "currency": "USD",
      "percentSavings": 75,
      "drr": false
    },
    "hotelUrls": {
      "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F21973653%2F2018-04-12%2F2018-04-15",
      "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-04-12%2F2018-04-15%3FSearchType%3DDestination%26CityName%3DNorth+Miami+Beach%26RegionId%3D178286%26Selected%3D21973653"
    }
  },
  {
    "offerDateRange": {
      "travelStartDate": [
        2018,
        9,
        27
      ],
      "travelEndDate": [
        2018,
        10,
        2
      ],
      "lengthOfStay": 5
    },
    "destination": {
      "regionID": "178294",
      "associatedMultiCityRegionId": "178294",
      "longName": "Orlando (and vicinity), Florida, United States of America",
      "shortName": "Orlando",
      "country": "United States of America",
      "province": "Florida",
      "city": "Orlando",
      "tla": "ORL",
      "nonLocalizedCity": "Orlando"
    },
    "hotelInfo": {
      "hotelId": "1841539",
      "hotelName": "The Point Hotel & Suites",
      "localizedHotelName": "The Point Hotel & Suites",
      "hotelDestination": "Orlando",
      "hotelDestinationRegionID": "2693",
      "hotelLongDestination": "Orlando,FL,USA",
      "hotelStreetAddress": "7389 Universal Blvd",
      "hotelCity": "Orlando",
      "hotelProvince": "FL",
      "hotelCountryCode": "USA",
      "hotelLatitude": 28.456084,
      "hotelLongitude": -81.462043,
      "hotelStarRating": "3.5",
      "hotelGuestReviewRating": 4.4,
      "hotelReviewTotal": 6036,
      "hotelImageUrl": "https://images.trvl-media.com/hotels/2000000/1850000/1841600/1841539/9f0b5112_t.jpg",
      "vipAccess": true,
      "isOfficialRating": false
    },
    "hotelPricingInfo": {
      "averagePriceValue": 101.15,
      "totalPriceValue": 505.75,
      "crossOutPriceValue": 297.5,
      "originalPricePerNight": 297.5,
      "currency": "USD",
      "percentSavings": 66,
      "drr": false
    },
    "hotelUrls": {
      "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F1841539%2F2018-09-27%2F2018-10-02",
      "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-09-27%2F2018-10-02%3FSearchType%3DDestination%26CityName%3DOrlando%26RegionId%3D178294%26Selected%3D1841539"
    }
  },
  {
    "offerDateRange": {
      "travelStartDate": [
        2018,
        3,
        13
      ],
      "travelEndDate": [
        2018,
        3,
        18
      ],
      "lengthOfStay": 5
    },
    "destination": {
      "regionID": "178280",
      "associatedMultiCityRegionId": "178280",
      "longName": "Los Angeles (and vicinity), California, United States Of America",
      "shortName": "Los Angeles",
      "country": "United States of America",
      "province": "California",
      "city": "Los Angeles",
      "tla": "QLA",
      "nonLocalizedCity": "Los Angeles"
    },
    "hotelInfo": {
      "hotelId": "13100360",
      "hotelName": "El Royale Gardens Near Universal Studios",
      "localizedHotelName": "El Royale Gardens Near Universal Studios",
      "hotelDestination": "Studio City",
      "hotelDestinationRegionID": "9758",
      "hotelLongDestination": "Studio City,CA,USA",
      "hotelStreetAddress": "11117 Ventura Blvd",
      "hotelCity": "Studio City",
      "hotelProvince": "CA",
      "hotelCountryCode": "USA",
      "hotelLatitude": 34.141384,
      "hotelLongitude": -118.372485,
      "hotelStarRating": "2.5",
      "hotelGuestReviewRating": 4.76,
      "hotelReviewTotal": 132,
      "hotelImageUrl": "https://images.trvl-media.com/hotels/14000000/13110000/13100400/13100360/b066f4fe_t.jpg",
      "vipAccess": false,
      "isOfficialRating": false
    },
    "hotelPricingInfo": {
      "averagePriceValue": 150.54,
      "totalPriceValue": 752.7,
      "crossOutPriceValue": 386,
      "originalPricePerNight": 386,
      "currency": "USD",
      "percentSavings": 61,
      "drr": false
    },
    "hotelUrls": {
      "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F13100360%2F2018-03-13%2F2018-03-18",
      "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-03-13%2F2018-03-18%3FSearchType%3DDestination%26CityName%3DStudio+City%26RegionId%3D178280%26Selected%3D13100360"
    }
  },
  {
    "offerDateRange": {
      "travelStartDate": [
        2018,
        3,
        23
      ],
      "travelEndDate": [
        2018,
        3,
        27
      ],
      "lengthOfStay": 4
    },
    "destination": {
      "regionID": "178293",
      "associatedMultiCityRegionId": "178293",
      "longName": "New York (and vicinity), New York, United States of America",
      "shortName": "New York",
      "country": "United States of America",
      "province": "New York",
      "city": "New York",
      "tla": "NYC",
      "nonLocalizedCity": "New York"
    },
    "hotelInfo": {
      "hotelId": "25906",
      "hotelName": "Salisbury Hotel",
      "localizedHotelName": "Salisbury Hotel",
      "hotelDestination": "New York",
      "hotelDestinationRegionID": "2621",
      "hotelLongDestination": "New York,NY,USA",
      "hotelStreetAddress": "123 W 57th St",
      "hotelCity": "New York",
      "hotelProvince": "NY",
      "hotelCountryCode": "USA",
      "hotelLatitude": 40.764841,
      "hotelLongitude": -73.978404,
      "hotelStarRating": "3.0",
      "hotelGuestReviewRating": 4.1,
      "hotelReviewTotal": 16455,
      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/30000/26000/25906/4be9c969_t.jpg",
      "vipAccess": true,
      "isOfficialRating": false
    },
    "hotelPricingInfo": {
      "averagePriceValue": 206.21,
      "totalPriceValue": 824.84,
      "crossOutPriceValue": 433.46,
      "originalPricePerNight": 433.46,
      "currency": "USD",
      "percentSavings": 52.43,
      "drr": false
    },
    "hotelUrls": {
      "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F25906%2F2018-03-23%2F2018-03-27",
      "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-03-23%2F2018-03-27%3FSearchType%3DDestination%26CityName%3DNew+York%26RegionId%3D178293%26Selected%3D25906"
    }
  },
  {
    "offerDateRange": {
      "travelStartDate": [
        2018,
        4,
        13
      ],
      "travelEndDate": [
        2018,
        4,
        17
      ],
      "lengthOfStay": 4
    },
    "destination": {
      "regionID": "178276",
      "associatedMultiCityRegionId": "178276",
      "longName": "Las Vegas (and vicinity), Nevada, United States of America",
      "shortName": "Las Vegas",
      "country": "United States of America",
      "province": "Nevada",
      "city": "Las Vegas",
      "tla": "LAS",
      "nonLocalizedCity": "Las Vegas"
    },
    "hotelInfo": {
      "hotelId": "41277",
      "hotelName": "the D Las Vegas",
      "localizedHotelName": "the D Las Vegas",
      "hotelDestination": "Las Vegas",
      "hotelDestinationRegionID": "2008",
      "hotelLongDestination": "Las Vegas,NV,USA",
      "hotelStreetAddress": "301 Fremont St",
      "hotelCity": "Las Vegas",
      "hotelProvince": "NV",
      "hotelCountryCode": "USA",
      "hotelLatitude": 36.168864,
      "hotelLongitude": -115.142385,
      "hotelStarRating": "3.5",
      "hotelGuestReviewRating": 3.73,
      "hotelReviewTotal": 7609,
      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/50000/41300/41277/41277_203_t.jpg",
      "vipAccess": false,
      "isOfficialRating": false
    },
    "hotelPricingInfo": {
      "averagePriceValue": 62.62,
      "totalPriceValue": 250.48,
      "crossOutPriceValue": 116.5,
      "originalPricePerNight": 116.5,
      "currency": "USD",
      "percentSavings": 46.25,
      "drr": false
    },
    "hotelUrls": {
      "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F41277%2F2018-04-13%2F2018-04-17",
      "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-04-13%2F2018-04-17%3FSearchType%3DDestination%26CityName%3DLas+Vegas%26RegionId%3D178276%26Selected%3D41277"
    }
  }
];

const component1 = shallow((
  <Hotels hotelsData={hotelsData} loading={false}/>
));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hotels hotelsData={hotelsData} loading={false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('parses hotels data correctly', () => {
  expect(component1.find('.d-flex').at(1).children().at(0).get(0).props.children).toEqual('North Miami Beach');
  expect(component1.find('.d-flex').at(2).children().at(0).get(0).props.children).toEqual('Orlando');
  expect(component1.find('.d-flex').at(3).children().at(0).get(0).props.children).toEqual('Studio City');
});

it('shows/hides map on click', () => {
  expect(component1.state().showMap[0]).not.toEqual(true);
  component1.find('.btn-primary').at(0).simulate('click');
  expect(component1.state().showMap[0]).toEqual(true);
});