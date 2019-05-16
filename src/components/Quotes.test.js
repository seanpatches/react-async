import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders Quotes', () => {
    const quotes = [{
      character: 'Fry',
      image: '/image',
      quote: 'What??'
    },
    {
      character: 'Me',
      image: '/image2',
      quote: 'Why??'
    }];

    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
