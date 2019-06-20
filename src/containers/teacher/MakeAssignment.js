import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateAssignmentForm from '../../components/instructor/assignments/CreateAssignmentForm';
import { createAssignment } from '../../actions/instructor/createAssignmentActions';

class AssignmentCreation extends Component {
  static propTypes = {
    post: PropTypes.func.isRequired
  }

  state = {
    course: '',
    type: '',
    title: '',
    instructions: '',
    classDate: '',
    dateAvailable: '', 
    dateDue: '', 
    dateClosed: ''
  }

  handleChangeQuill = html => {
    console.log(html);
    this.setState({ submission: html });
  }

  handleChange = ({ target }) => {
    console.log(target.name, target.value);
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.post(this.state.course, this.state.type, this.state.title, this.state.instructions, this.state.classDate, this.state.dateAvailable. this.state.dateDue, this.state.dateClosed);
  }

  render() {
    return (
      <>
      <h1>Create an Assignment</h1>
      <CreateAssignmentForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleChangeQuill={this.handleChangeQuill} course={this.state.course} type={this.state.type} title={this.state.title} instructions={this.state.instructions} classDate={this.state.classDate} dateAvailable={this.state.dateAvailable} dateDue={this.state.dateDue} dateClosed={this.state.dateClosed} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  post(course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed) {
    dispatch(createAssignment(course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed));
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(AssignmentCreation);
