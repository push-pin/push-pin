import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAssesByCourse, selectStudent, selectCourse } from '../../selectors/assignment/assSelectors';
import { getAssesByCourse } from '../../actions/assignment/assActions';
import Assignment from '../../components/assignments/Assignments';
import { DashboardContainer, WeekAtGlanceListContainer, WeekAtGlanceContainer } from '../../../styles/layout/DashboardContainer';
import { ListItemHeaderWeek } from '../../../styles/components/ListItemHeader';

class CourseAssignments extends PureComponent {
  static propTypes = {
    asses: PropTypes.array.isRequired,
    course: PropTypes.string.isRequired,
    student: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { course, student } = this.props;
    this.props.fetch(course._id, student);
  }

  render() {
    return (
      <>
      <DashboardContainer>
        <WeekAtGlanceContainer>
          <ListItemHeaderWeek>
            <h2>{this.props.course.name}</h2>
          </ListItemHeaderWeek>
          <WeekAtGlanceListContainer>
            <Assignment assignments={this.props.asses} />
          </WeekAtGlanceListContainer>
        </WeekAtGlanceContainer>
      </DashboardContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  asses: selectAssesByCourse(state),
  course: selectCourse(state),
  student: selectStudent(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(course, student) {
    dispatch(getAssesByCourse(course, student));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAssignments);

