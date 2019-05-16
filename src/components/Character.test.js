import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a Character', () => {
    const character = {
      name: 'Sean',
      status: 'Alive?',
      age: '27',
      species: 'Human'
    };
    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
