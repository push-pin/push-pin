import React from 'react';
import { shallow } from 'enzyme';
import Assignments from './Assignments';

describe('Assignments component', () => {
  it('renders a Assignments', () => {
    const assignments = [
      {
        date: new Date(),
        title:  'Ass 1',
        grade: false,
        submitted: false
      },
      {
        date: new Date(),
        title:  'Ass 11',
        grade: false,
        submitted: true
      },
      {
        date: new Date(),
        title:  'Ass 12',
        grade: false,
        submitted: false
      },
      {
        date: new Date(),
        title:  'Ass 13',
        grade: false,
        submitted: true
      }
    ];
    
    const wrapper = shallow(<Assignments assignments={assignments} />);
    expect(wrapper).toMatchSnapshot();
  });
});
