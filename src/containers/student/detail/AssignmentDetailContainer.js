import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReadingSubmission from './reading/unsubmitted/ReadingSubmission';
import AssignmentDetail from '../../../components/detail/assignment/detail/AssignmentDetail';
import { DashboardContainer } from '../../../../styles/layout/DashboardContainer';
import { selectAssignmentDetailById } from '../../../selectors/student/detail/assignments/assignmentSelectors';
import { fetchAssignmentDetail } from '../../../actions/student/detail/assignment/assignmentDetailActions';
import ReadingResponses from '../../../components/detail/assignment/unsubmitted/reading/ReadingResponses';
import { fetchReadingResponses } from '../../../actions/student/detail/assignment/reading/readingResponsesActions';
import { selectReadingResponses } from '../../../selectors/student/detail/responsesSelectors';

class AssignmentDetailContainer extends PureComponent {

  static propTypes = {
    fetch: PropTypes.func.isRequired,
    fetchResponses: PropTypes.func.isRequired,
    assignment: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dateDue: PropTypes.string.isRequired,
      instructions: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    }).isRequired,
    submitted: PropTypes.bool,
    grade: PropTypes.number,
    responses: PropTypes.array.isRequired
  }

  //state

  componentDidMount() {
    console.log('are you mounting?');
    this.props.fetch();
    this.props.fetchResponses();
    //fetch assignment by id
    //fetch submission by assignment id  (we will render these in the bottom section and also check them to see if the logged in user has a submission)
    //if that user has a submission, try to fetch the grade for that submission by submission id
  }

  render() {
    if(!this.props.assignment) {
      return <h1>LOADING!</h1>;
    }
    return (
      <DashboardContainer>
        <AssignmentDetail assignment={this.props.assignment} submitted={this.props.submitted} grade={this.props.grade}/>
        <ReadingSubmission />
        {/* //submissions by assignment/course */}
        <ReadingResponses responseArray={this.props.responses} />
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => ({
  assignment: selectAssignmentDetailById(state),
  responses: selectReadingResponses(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchAssignmentDetail(match.params.assignmentId));
  },
  fetchResponses() {
    dispatch(fetchReadingResponses(match.params.assignmentId));
  }
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
) (AssignmentDetailContainer));
