import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRecents, selectUnreadRecents, selectRecentsLoading, selectRecentsError } from '../../../selectors/student/dashboard/recentsSelectors';
import { fetchRecents } from '../../../services/student/dashboard/recentItemServices';
import RecentList from '../../../components/student/dashboard/recently-added/RecentList';

class DashboardRecentlyUpdated extends PureComponent {
  //will get graded submissions and comments by student id
  //two arrays, spread into one and sort by time, limit number fed into the component
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    recents: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    unread: PropTypes.number.isRequired,
    error: PropTypes.string
  }

  componentDidMount() {
    this.props.fetch();
  }
  //similar unread feature to announcements
  render() {
    if(!this.props.recents[0]) {
      return <h1>Loading</h1>;
    }

    return <RecentList recentlyArr={this.props.recents} unread={this.props.unread} />;
  }

}

const mapStateToProps = state => ({
  recents: selectRecents(state),
  loading: selectRecentsLoading(state),
  unread: selectUnreadRecents(state),
  error: selectRecentsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchRecents());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardRecentlyUpdated);
