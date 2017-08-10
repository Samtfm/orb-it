import axios from 'axios';

export const fetchOrbs = (offset = 0) => (
  axios({
    method: 'get',
    url: `http://localhost:3001/api/orbs?offset=${offset}`,
  })
)
