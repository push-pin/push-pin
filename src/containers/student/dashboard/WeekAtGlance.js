import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WeekList from '../../../components/student/dashboard/week-glance/WeekList';
import { connect } from 'react-redux';
import { selectWeek, selectWeekError, selectWeekLoading } from '../../../selectors/student/dashboard/weekSelectors';
import { getWeekAtGlance } from '../../../actions/student/dashboard/weekActions';
import Styles from './WeekAtGlance.css';

class WeekContainer extends PureComponent {
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
    // return <h1>week</h1>;
    if(!this.props.assignments.Mon) {  //change back to loading once fetch is a promise
      return <h1>Loading</h1>;
    }
    else {
      return (
        <section className={Styles.WeekAtGlance}>
          <WeekList assignments={this.props.assignments} />
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  assignments: selectWeek(state),
  loading: selectWeekLoading(state),
  error: selectWeekError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getWeekAtGlance());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekContainer);


