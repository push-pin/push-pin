import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

function CreateAssignmentForm({ handleSubmit, handleChange, handleChangeQuill, course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed }) {
  return (
    <form onSubmit={handleSubmit}>
    Course: <input type="text" name="course" value={course} onChange={handleChange} />
    Type: 
      <select name="type" value={type} onChange={handleChange}>
        <option value="reading">Reading</option>
        <option value="solo">Solo Build</option>
        <option value="mob">Mob Build</option>
        <option value="project">Final Project</option>
      </select>
    Title: <input type="text" name="title" value={title} onChange={handleChange} />
    Instructions: <ReactQuill 
        theme="snow"
        name="instructions"
        onChange={handleChangeQuill}
        value={instructions}
        modules={CreateAssignmentForm.modules}
        formats={CreateAssignmentForm.formats}
        bounds={'.app'} />
    Relevant Class Date: <input type="datetime-local" name="classDate" value={classDate} onChange={handleChange}></input>
    Date Available: <input type="datetime-local" name="dateAvailable" value={dateAvailable} onChange={handleChange}></input>
    Date Due: <input type="datetime-local" name="dateDue" value={dateDue} onChange={handleChange}></input>
    Date Closed: <input type="datetime-local" name="dateClosed" value={dateClosed} onChange={handleChange}></input>
      <button>Submit</button>
    </form>
  );
}

CreateAssignmentForm.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, 
      { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};
CreateAssignmentForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

CreateAssignmentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired, 
  handleChangeQuill: PropTypes.func.isRequired,
  course: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired, 
  classDate: PropTypes.string.isRequired,
  dateAvailable: PropTypes.string.isRequired,
  dateDue: PropTypes.string.isRequired, 
  dateClosed: PropTypes.string.isRequired
};

export default CreateAssignmentForm;
