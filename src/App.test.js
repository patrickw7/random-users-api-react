import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('render main App without errors', () => {
  shallow(<App/>);
});