import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadingForm from '../../../../../components/detail/assignment/unsubmitted/reading/ReadingForm';
import { selectUserId, selectAssignmentId } from '../../../../../selectors/student/detail/submissionSelectors';
import { createSubmission } from '../../../../../actions/student/detail/assignment/reading/unsubmitted/readingSubmissionActions';

class ReadingSubmission extends Component {
  static propTypes = {
    post: PropTypes.func.isRequired,
    studentId: PropTypes.string.isRequired,
    assignment: PropTypes.string.isRequired
  }

  state = {
    submission: '',
    studentId: '',
    assignment: ''
  }
  componentDidMount() {
    this.setState({
      studentId: this.props.studentId,
      assignment: this.props.assignment
    });
  }
  handleChange = html => {
    this.setState({ submission: html });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.post(this.props.assignment, this.state.studentId, this.state.submission);
  }

  render() {
    return (
      <ReadingForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} textBody={this.state.submission} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentId: selectUserId(state),
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
