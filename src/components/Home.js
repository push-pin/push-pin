import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getRole } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';


class Home extends PureComponent {
  static propTypes = {
    role: PropTypes.string.isRequired
  };

  state = {
    component: 'Student'
  }

  componentDidMount() {
    if(this.props.role === 'teacher') {
      this.setState({ component: 'Teacher' });
    }
  }

  render() {

    return (
      <>
        <h1>{this.state.component}</h1>
      </>
    );
  }
}

const mapStateToProps = state => ({
  role: getRole(state)
});

export default connect(
  mapStateToProps
)(Home);
