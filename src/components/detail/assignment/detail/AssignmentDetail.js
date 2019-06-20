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
      <DetailCard>
        <DetailCardHeader>
          <section>
            <h3>{assignment.type}</h3>
          </section>
        </DetailCardHeader>
        <DetailInfo>
          <h4>{assignment.title}</h4>
          <p className="info-date">{assignment.dateDue}</p>
          <p>{assignment.instructions}</p>
          <p>Submitted: {submitted}</p>
          <p>Grade: {grade}</p>
        </DetailInfo>

      </DetailCard> }
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
