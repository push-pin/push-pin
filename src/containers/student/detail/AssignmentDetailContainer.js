import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReadingSubmission from './reading/unsubmitted/ReadingSubmission';
import AssignmentDetail from '../../../components/detail/assignment/detail/AssignmentDetail';
import { selectAssignmentDetailById } from '../../../selectors/student/detail/assignments/assignmentSelectors';
import { fetchAssignmentDetail } from '../../../actions/student/detail/assignment/assignmentDetailActions';
import ReadingResponses from '../../../components/detail/assignment/unsubmitted/reading/ReadingResponses';
import { fetchReadingResponses } from '../../../actions/student/detail/assignment/reading/readingResponsesActions';
import { selectReadingResponses } from '../../../selectors/student/detail/responsesSelectors';
import {
  DashboardContainer,
  WeekAtGlanceContainer, 
  AssignmentContainer
} from '../../../../styles/layout/DashboardContainer';

class AssignmentDetailContainer extends Component {

  static propTypes = {
    fetch: PropTypes.func.isRequired,
    fetchResponses: PropTypes.func.isRequired,
    assignment: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
  }

  componentDidMount() {
    return Promise.all([
      this.props.fetch(),
      this.props.fetchResponses()
    ]);
  }

  render() {
    if(!this.props.assignment.title) {
      return <h1>LOADING!</h1>;
    }
    return (
      <DashboardContainer>
        <AssignmentContainer>
          <AssignmentDetail assignment={this.props.assignment} />
          <ReadingSubmission />
        </AssignmentContainer>
        <WeekAtGlanceContainer>
          <ReadingResponses responseArray={this.props.responses} />
        </WeekAtGlanceContainer>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    assignment: selectAssignmentDetailById(state),
    responses: selectReadingResponses(state)
  };
};

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
