import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInstAnnouncements } from '../../../actions/instructor/dashboard/instAnnouncementActions';
import { selectInstAnnouncements, selectInstUnreadAnnouncements, selectInstAnnouncementsLoading, selectInstAnnouncementsError } from '../../../selectors/instructor/dashboard/instAnnouncementsSelectors';
import InstAnnouncementList from '../../../components/instructor/dashboard/announcements/InstAnnouncementList';

class InstAnnouncementsContainer extends PureComponent {
  //should somehow update component once something is read
  //how does that interact with database? do an update on leaving the page somehow?
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    announcements: PropTypes.array.isRequired,
    unread: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render(){
    if(!this.props.announcements[1]) {
      return <h1>Loading</h1>;
    }
    return (
      <InstAnnouncementList announcements={this.props.announcements} unread={this.props.unread} />
    );
  }

}

const mapStateToProps = state => ({
  announcements: selectInstAnnouncements(state),
  unread: selectInstUnreadAnnouncements(state),
  loading: selectInstAnnouncementsLoading(state),
  error: selectInstAnnouncementsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getInstAnnouncements());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstAnnouncementsContainer);
