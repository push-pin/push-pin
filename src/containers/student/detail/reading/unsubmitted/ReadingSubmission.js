import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadingForm from '../../../../../components/detail/assignment/unsubmitted/reading/ReadingForm';
import { selectUserId } from '../../../../../selectors/student/detail/submissionSelectors';
class ReadingSubmission extends PureComponent {
  static propTypes = {
    post: PropTypes.func.isRequired,
  }

  state = {
    submission: '',
    student: '',
    assignment: ''
  }

  handleChange = ({ target }) => {
    this.setState({ ...this.state, submission: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { submission, student, assignment } = this.state;
    this.props.post({ submission, student, assignment });
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

const mapStateToProps = { match }, state => ({
  student: 
});

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingSubmission);
