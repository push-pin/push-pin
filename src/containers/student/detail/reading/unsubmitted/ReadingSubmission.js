import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadingForm from '../../../../../components/detail/assignment/unsubmitted/reading/ReadingForm';
// import { selectUserId } from '../../../../../selectors/student/detail/submissionSelectors';
import { createSubmission } from '../../../../../actions/student/detail/assignment/reading/unsubmitted/readingSubmissionActions';


class ReadingSubmission extends PureComponent {
  static propTypes = {
    post: PropTypes.func.isRequired,
    student: '',
    assignment: ''
  }

  state = {
    submission: '',
  }

  handleChange = ({ target }) => {
    this.setState({ submission: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // const { submission, student, assignment } = this.state;
    this.props.post(this.props.assignment, this.props.student, this.state.submission);
    this.setState({
      submission: '',
      student: '',
      assignment: ''
    });
  }

  render() {
    return (
      <ReadingForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} textBody={this.state.submission} />
    );
  }
}

const mapStateToProps = state => ({
  // student: selectUserId(state),
  student: '5d081634a08f000017f64a71',
  assignment: '5d07e2db71a8382af43cd975'
});

const mapDispatchToProps = dispatch => ({
  post(ass, user, text) {
    dispatch(createSubmission(ass, user, text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingSubmission);
