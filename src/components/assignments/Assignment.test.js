import React from 'react';
import { shallow } from 'enzyme';
import DayItem from './Assignment';

describe('Assignment component', () => {
  it('renders a Assignment', () => {
    const assignment = {
      classDate: '2012-10-15T21:26:17Z',
      type: 'mob',
      title:  'Ass 1',
      grade: false,
      submitted: false,
      _id: '1234',
      dateDue: '2012-10-15T21:26:17Z'
    };
    const wrapper = shallow(<DayItem type={assignment.type} title={assignment.title} dateDue={assignment.dateDue} submitted={assignment.submitted} _id={assignment._id} classDate={assignment.classDate} />);
    expect(wrapper).toMatchSnapshot();
  });
});
