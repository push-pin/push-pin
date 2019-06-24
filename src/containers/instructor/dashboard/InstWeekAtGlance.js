import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeekListInstructor from '../../../components/instructor/dashboard/week-glance/WeekListInstructor';
import { selectInstWeek, selectInstWeekError, selectInstWeekLoading } from '../../../selectors/instructor/dashboard/instWeekSelectors';
import { getInstWeek } from '../../../actions/instructor/dashboard/instWeekActions';

class InstWeekContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    assignments: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render(){
    if(!this.props.assignments.Mon) {  
      return <h1>Loading</h1>;
    }
    else {
      return (
        <section>
          <WeekListInstructor assignments={this.props.assignments} />
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  assignments: selectInstWeek(state),
  loading: selectInstWeekLoading(state),
  error: selectInstWeekError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getInstWeek());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstWeekContainer);
