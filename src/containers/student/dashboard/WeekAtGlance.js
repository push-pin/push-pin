import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeekList from '../../../components/student/dashboard/week-glance/WeekList';
import { connect } from 'react-redux';
import { selectWeek, selectWeekError, selectWeekLoading } from '../../../selectors/student/dashboard/weekSelectors';
import { getWeekAtGlance } from '../../../actions/student/dashboard/weekActions';
import { selectUserId } from '../../../selectors/student/detail/submissionSelectors';

class WeekContainer extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    assignments: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.object,
    student: PropTypes.string
  }

  state = {
    student: ''
  }

  componentDidMount() {
    console.log(this.props.student, 'user id');
    console.log(this.props.assignments, 'assignments in week at glance container');
    this.setState({
      student: this.props.student
    });

    this.props.fetch(this.props.student);
  }

  render(){
    if(!this.props.assignments.mon) {  //change back to loading once fetch is a promise
      return <h1>Loading</h1>;
    }
    else {
      return (
        <section>
          <WeekList assignments={this.props.assignments} />
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  assignments: selectWeek(state),
  loading: selectWeekLoading(state),
  error: selectWeekError(state),
  student: selectUserId(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(userId) {
    dispatch(getWeekAtGlance(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekContainer);
