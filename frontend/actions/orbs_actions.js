import * as OrbsApiUtil from '../util/orbs_api_util';

export const RECEIVE_ORBS = 'RECEIVE_ORBS';

export const receiveOrbs = orbs => ({
  type: RECEIVE_ORBS,
  orbs
})

export const requestOrbs = () => dispatch => (
  OrbsApiUtil.fetchOrbs()
    .then(orbs => dispatch(receiveOrbs(orbs.data)))
)
