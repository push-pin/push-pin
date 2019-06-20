import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAssesByCourse } from '../../selectors/assignment/assSelectors';
import { getAssesByCourse } from '../../actions/assignment/assActions';
import Assignment from '../../components/assignments/Assignments';

class CourseAssignments extends PureComponent {
  static propTypes = {
    asses: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {

    return (
      <>
        <Assignment assignments={this.props.asses} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  asses: selectAssesByCourse(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getAssesByCourse());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAssignments);

