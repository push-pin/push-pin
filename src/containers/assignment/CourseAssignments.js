import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAssesByCourse } from '../../selectors/assignment/assSelectors';
import { getAssesByCourse } from '../../actions/assignment/assActions';
import Assignment from '../../components/assignments/Assignments';
import { selectUserId } from '../../selectors/student/detail/submissionSelectors';

class CourseAssignments extends PureComponent {
  static propTypes = {
    asses: PropTypes.array.isRequired,
    course: PropTypes.string.isRequired,
    student: PropTypes.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { course, student } = this.props;
    this.props.fetch(course, student);
  }

  render() {

    return (
      <>
        <Assignment assignments={this.props.asses} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  asses: selectAssesByCourse(state),
  course: selectAssesByCourse(state),
  student: selectUserId(state)
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

