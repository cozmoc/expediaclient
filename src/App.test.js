import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import hotelsService from './services/hotelsService';
import Hotels from './components/hotels/hotels';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

const response = {
  "offerInfo": {
    "siteID": "1",
    "language": "en_US",
    "currency": "USD",
    "userSelectedCurrency": "USD"
  },
  "userInfo": {
    "persona": {
      "personaType": "OTHERS"
    },
    "userId": "foo"
  },
  "offers": {
    "Hotel": new Array(5)
  }
};

window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(response)
}))

const component1 = shallow((
  <App />
));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should retrieve all hotels', () => {
  expect(component1.state().hotelsData.length).not.toEqual(0);
});

it('should have search input first', () => {
  expect(component1.find('.form-control-lg').at(0).props().name).toEqual('destinationName');
});

it('should review all hotels in hotels component after clicking search', () => {
  expect(component1.find('.container').at(2).props().children.props.hotelsData.length).toEqual(0);
  component1.find('.btn-success').at(0).simulate('click');
  expect(component1.find('.container').at(2).props().children.props.hotelsData.length).toEqual(5);
});

it('should update terms onChange', () => {
  component1.find('.form-control-lg').at(0).simulate('keydown', { which: 'Miami' });
  component1.find('.form-control-lg').at(0).simulate('change', { target: {name: 'destinationName', value: 'Miami'} });
  expect(component1.state().terms.destinationName).toEqual('Miami');
});