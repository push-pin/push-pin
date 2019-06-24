import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRecentSubs, selectRecentSubsRecent, selectRecentSubsLoading, selectRecentSubsError } from '../../../selectors/instructor/dashboard/recentSubsSelector';
import { getRecentSubs } from '../../../actions/instructor/dashboard/recentSubsActions';
import RecentAddList from '../../../components/instructor/dashboard/recent-submissions/RecentAddList';

class RecentSubmissionContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    recentSubs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    recent: PropTypes.number.isRequired,
    error: PropTypes.object,
    courseId: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch('5d0c50e51136040017b428fa');
  }

  render() {
    if(!this.props.recentSubs[0]) {
      return <h1>Loading</h1>;
    }

    return <RecentAddList recentArray={this.props.recentSubs} recent={this.props.recent} />;
  }
}

const mapStateToProps = state => ({
  recentSubs: selectRecentSubs(state),
  loading: selectRecentSubsLoading(state),
  recent: selectRecentSubsRecent(state),
  error: selectRecentSubsError(state),
  courseId: state.user.currentCourses[0]._id
});

const mapDispatchToProps = dispatch => ({
  fetch(courseId) {
    dispatch(getRecentSubs(courseId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentSubmissionContainer);
