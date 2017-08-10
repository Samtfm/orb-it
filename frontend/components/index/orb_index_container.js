import { connect } from 'react-redux';
import { requestOrbs } from '../../actions/orbs_actions';
import OrbIndex from './orb_index';

const mapStateToProps = state => ({
  orbs: state.orbs
});

const mapDispatchToProps = dispatch => ({
  requestOrbs: () => dispatch(requestOrbs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrbIndex);
