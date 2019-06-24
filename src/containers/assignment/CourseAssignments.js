import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAssesByCourse, selectStudent, selectCourse } from '../../selectors/assignment/assSelectors';
import { getAssesByCourse } from '../../actions/assignment/assActions';
import Assignments from '../../components/assignments/Assignments';
import { CourseAssignmentContainer, CourseAssignmentListContainer, WeekAtGlanceContainer } from '../../../styles/layout/DashboardContainer';
import { ListItemHeaderWeek } from '../../../styles/components/ListItemHeader';

class CourseAssignments extends PureComponent {
  static propTypes = {
    asses: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
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
      <CourseAssignmentContainer>
        <WeekAtGlanceContainer>
          <ListItemHeaderWeek>
            <h2>{this.props.course.name}</h2>
          </ListItemHeaderWeek>
          <CourseAssignmentListContainer>
            <Assignments assignments={this.props.asses} />
          </CourseAssignmentListContainer>
        </WeekAtGlanceContainer>
      </CourseAssignmentContainer>
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
