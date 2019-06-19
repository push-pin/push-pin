import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadingForm from '../../../../../components/detail/assignment/unsubmitted/reading/ReadingForm';
import { selectUserId, selectAssignmentId } from '../../../../../selectors/student/detail/submissionSelectors';
import { createSubmission } from '../../../../../actions/student/detail/assignment/reading/unsubmitted/readingSubmissionActions';

class ReadingSubmission extends PureComponent {
  static propTypes = {
    post: PropTypes.func.isRequired,
    student: PropTypes.string.isRequired,
    assignment: PropTypes.string.isRequired
  }

  state = {
    submission: '',
    student: '',
    assignment: ''
  }
  componentDidMount() {
    this.setState({
      student: this.props.student,
      assignment: this.props.assignment
    });
  }
  handleChange = ({ target }) => {
    this.setState({ submission: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.post(this.props.assignment, this.state.student, this.state.submission);
    this.setState({
      submission: '',
    });
  }

  render() {
    return (
      <ReadingForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} textBody={this.state.submission} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: selectUserId(state),
    assignment: selectAssignmentId(state)
  };
};

const mapDispatchToProps = dispatch => ({
  post(ass, user, text) {
    dispatch(createSubmission(ass, user, text));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingSubmission);
