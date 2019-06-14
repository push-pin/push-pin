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
    error: PropTypes.string
  }

  componentDidMount() {
    console.log('This mounts');
    this.props.fetch();
  }

  render(){
    console.log('made it to render');
    if(!this.props.announcements[1]) {
      console.log('announcements', this.props.announcements);
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
  error: selectAnnouncementsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getAnnouncements());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAnnouncements);
