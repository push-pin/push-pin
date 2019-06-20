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
    this.setState({
      student: this.props.student
    });
    this.props.fetch();
    console.log(this.props.student, 'user id');
    console.log(this.state.student, 'state');
  }

  render(){
    // return <h1>week</h1>;
    if(!this.props.assignments.Mon) {  //change back to loading once fetch is a promise
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
  fetch() {
    dispatch(getWeekAtGlance());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekContainer);
