import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnnouncements } from '../../../actions/student/dashboard/announcementActions';
import { selectAnnouncements, selectUnreadAnnouncements, selectAnnouncementsLoading, selectAnnouncementsError } from '../../../selectors/student/dashboard/announcementSelectors';
import AnnouncementList from '../../../components/student/dashboard/announcements/AnnouncementList';

class DashboardAnnouncements extends PureComponent {
  //should somehow update component once something is read
  //how does that interact with database? do an update on leaving the page somehow?
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    announcements: PropTypes.array.isRequired,
    unread: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    courseId: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render(){
    if(!this.props.announcements[1]) {
      return <h1>Loading</h1>;
    }
    return (
      
      <AnnouncementList announcements={this.props.announcements} unread={this.props.unread} />
    );
  }

}

const mapStateToProps = state => ({
  announcements: selectAnnouncements(state),
  unread: selectUnreadAnnouncements(state),
  loading: selectAnnouncementsLoading(state),
  error: selectAnnouncementsError(state),
  courseId: state.user.courseId
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(getAnnouncements(props.courseId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAnnouncements);
