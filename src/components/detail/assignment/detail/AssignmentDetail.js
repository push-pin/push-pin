import React from 'react';
import PropTypes from 'prop-types';
import {
  DetailCard,
  DetailCardHeader,
  DetailInfo
} from '../../../../../styles/components/DetailCards';
//we want to add grade and possible points to this

function AssignmentDetail({ assignment, submitted, grade }) {
  return (
    <>
    { assignment && 
    <>
        <DetailCardHeader>
          <h3>{assignment.type}</h3>
          <section className="submission-details">
            <p>Submitted: {submitted}</p>
            <p>Grade: {grade}</p>
          </section>
        </DetailCardHeader>
      <DetailCard>
        <DetailInfo>
          <h4>{assignment.title}</h4>
          <p className="info-date">{assignment.dateDue}</p>
          <div dangerouslySetInnerHTML={createMarkup(assignment.instructions)} />
        </DetailInfo>
      </DetailCard>
    </>
    }
    </>
  );
}

AssignmentDetail.propTypes = {
  submitted: PropTypes.bool,
  grade: PropTypes.number,
  assignment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    dateDue: PropTypes.string.isRequired
  })
};

export default AssignmentDetail;

function createMarkup(string) {
  return { __html: string };
}
