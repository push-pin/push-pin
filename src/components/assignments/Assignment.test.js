import React from 'react';
import { shallow } from 'enzyme';
import Assignment from './Assignment';

describe('Assignment component', () => {
  it('renders a Assignment', () => {
    const assignment = {
      date: new Date(),
      title:  'Ass 1',
      grade: false,
      submitted: false
    };
    const wrapper = shallow(<Assignment assignment={assignment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
