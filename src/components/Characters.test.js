import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders Characters', () => {
    const characters = [{
      name: 'Me',
      status: 'Dead',
      species: 'Dog',
      image: '20'
    },
    {
      name: 'You',
      status: 'Alive',
      species: 'Dog',
      image: '10'
    }];

    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
