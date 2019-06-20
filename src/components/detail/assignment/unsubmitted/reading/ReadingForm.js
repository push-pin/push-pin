import ReactQuill from 'react-quill';
import React from 'react';
import PropTypes from 'prop-types';

function ReadingForm({ handleSubmit, handleChange, textBody }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ReactQuill 
          theme="snow"
          name="textBody"
          onChange={handleChange}
          value={textBody}
          modules={ReadingForm.modules}
          formats={ReadingForm.formats}
          bounds={'.app'}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

ReadingForm.modules = {
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

ReadingForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];


ReadingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  textBody: PropTypes.string.isRequired
};

export default ReadingForm;
