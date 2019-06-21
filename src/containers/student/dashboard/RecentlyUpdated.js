import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRecents, selectRecentRecents, selectRecentsLoading, selectRecentsError } from '../../../selectors/student/dashboard/recentsSelectors';
import { getRecents } from '../../../actions/student/dashboard/recentsActions';
import RecentList from '../../../components/student/dashboard/recently-added/RecentList';

class DashboardRecentlyUpdated extends PureComponent {
  //will get graded submissions and comments by student id
  //two arrays, spread into one and sort by time, limit number fed into the component
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    recents: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    recent: PropTypes.number.isRequired,
    error: PropTypes.object,
    studentId: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.studentId);
  }

  render() {
    console.log(this.props);
    if(!this.props.recents[0]) {
      return <h1>Loading</h1>;
    }

    return <RecentList recentlyArr={this.props.recents} recent={this.props.recent} />;
  }
}

const mapStateToProps = state => ({
  recents: selectRecents(state),
  loading: selectRecentsLoading(state),
  recent: selectRecentRecents(state),
  error: selectRecentsError(state),
  studentId: state.user.user._id
});

const mapDispatchToProps = dispatch => ({
  fetch(studentId) {
    dispatch(getRecents(studentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardRecentlyUpdated);
