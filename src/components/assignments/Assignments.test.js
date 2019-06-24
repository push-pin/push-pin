import React from 'react';
import { shallow } from 'enzyme';
import Assignments from './Assignments';

describe('Assignments component', () => {
  it('renders a Assignments', () => {
    const assignments = [
      {
        classDate: '2012-10-15T21:26:17Z',
        dateDue: '2012-10-15T21:26:17Z',
        title:  'Ass 1',
        type: 'mob',
        submitted: false,
        _id: '1234'
      },
      {
        classDate: '2012-10-15T21:26:17Z',
        dateDue: '2012-10-15T21:26:17Z',
        title:  'Ass 11',
        type: 'mob',
        submitted: true,
        _id: '1234'
      },
      {
        classDate: '2012-10-15T21:26:17Z',
        dateDue: '2012-10-15T21:26:17Z',
        title:  'Ass 12',
        type: 'solo',
        submitted: false,
        _id: '3456'
      },
      {
        classDate: '2012-10-15T21:26:17Z',
        dateDue: '2012-10-15T21:26:17Z',
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
