import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadingSubmission from './reading/unsubmitted/ReadingSubmission';
import AssignmentDetail from '../../../components/detail/assignment/detail/AssignmentDetail';
import { DashboardContainer } from '../../../../styles/layout/DashboardContainer';

class AssignmentDetailContainer extends PureComponent {

  static propTypes = {
    fetch: PropTypes.func.isRequired,
    assignment: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dateDue: PropTypes.string.isRequired,
      instructions: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    }).isRequired,
    submitted: PropTypes.bool.isRequired,
    grade: PropTypes.number.isRequired
  }

  //state

  componentDidMount() {
    this.props.fetch();
    //fetch assignment by id
    //fetch submission by assignment id  (we will render these in the bottom section and also check them to see if the logged in user has a submission)
    //if that user has a submission, try to fetch the grade for that submission by submission id
  }

  render() {
    return (
      <DashboardContainer>
        <AssignmentDetail />
        <ReadingSubmission assignmentId={this.props.assignment._id} />
        {/* //submissions by assignment/course */}
      </DashboardContainer>
    );
  }
}

// const mapStateToProps = state => {

// };

const mapDispatchToProps = dispatch => {

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (AssignmentDetailContainer);
