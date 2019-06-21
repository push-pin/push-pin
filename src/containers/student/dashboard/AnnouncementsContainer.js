import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnnouncements } from '../../../actions/student/dashboard/announcementActions';
import { selectAnnouncements, selectRecentAnnouncements, selectAnnouncementsLoading, selectAnnouncementsError } from '../../../selectors/student/dashboard/announcementSelectors';
import AnnouncementList from '../../../components/student/dashboard/announcements/AnnouncementList';
import { getUser } from '../../../selectors/sessionSelectors';

class DashboardAnnouncements extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    announcements: PropTypes.array.isRequired,
    recent: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    error: PropTypes.object,
  }

  componentDidMount() {
    this.props.fetch(this.props.user.currentCourses[0]._id);
  }

  render() {
    if(!this.props.announcements[0]) {
      return <h1>Loading</h1>;
    }
    return <AnnouncementList announcements={this.props.announcements} recent={this.props.recent} />;
  }
}

const mapStateToProps = state => ({
  announcements: selectAnnouncements(state),
  recent: selectRecentAnnouncements(state),
  loading: selectAnnouncementsLoading(state),
  error: selectAnnouncementsError(state),
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(courseId) {
    dispatch(getAnnouncements(courseId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAnnouncements);
