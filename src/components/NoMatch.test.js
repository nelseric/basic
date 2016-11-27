import React from 'react';
import { mount } from 'enzyme';

import NoMatch from './NoMatch';

it('renders without crashing', () => {
  mount(<NoMatch />);
});
