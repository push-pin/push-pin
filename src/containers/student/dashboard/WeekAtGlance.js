import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WeekList from '../../../components/student/dashboard/week-glance/WeekList';
import { connect } from 'react-redux';
import { getWeek, getWeekError, getWeekLoading } from '../../../selectors/student/dashboard/weekSelectors';
import { getWeekAtGlance } from '../../../actions/student/dashboard/weekActions';

class WeekContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    assignments: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.string.isRequired
  }

  componentDidMount() {
    console.log('mounty');
    this.props.fetch();
  }

  render(){
    console.log('render');
    console.log(this.props.loading);
    // return <h1>week</h1>;
    if(!this.props.assignments.Mon) {  //change back to loading once fetch is a promise
      return <h1>Loading</h1>;
    }
    else {
      return (
        <section>
          <h1>Week At Glance</h1>
          <WeekList assignments={this.props.assignments} />
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  assignments: getWeek(state),
  loading: getWeekLoading(state),
  error: getWeekError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    console.log('in dispatch fetch');
    dispatch(getWeekAtGlance());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekContainer);


