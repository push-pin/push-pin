import React from 'react';
import { shallow } from 'enzyme';
import Assignments from './Assignments';

describe('Assignments component', () => {
  it('renders a Assignments', () => {
    const assignments = [
      {
        classDate: new Date(),
        title:  'Ass 1',
        type: 'mob',
        submitted: false,
        _id: '1234'
      },
      {
        classDate: new Date(),
        title:  'Ass 11',
        type: 'mob',
        submitted: true,
        _id: '1234'
      },
      {
        classDate: new Date(),
        title:  'Ass 12',
        type: 'solo',
        submitted: false,
        _id: '3456'
      },
      {
        classDate: new Date(),
        title:  'Ass 13',
        type: 'reading',
        submitted: true,
        _id: '456'
      }
    ];
    
    const wrapper = shallow(<Assignments assignments={assignments} />);
    expect(wrapper).toMatchSnapshot();
  });
});
