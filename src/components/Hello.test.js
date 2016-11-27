import React from 'react';
import { mount } from 'enzyme';

import Hello from './Hello';

it('renders without crashing', () => {
  mount(<Hello />);
});
