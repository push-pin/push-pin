import { get } from '../request';

export const fetchUser = auth0Id => {
  return get(`/api/v1/auth/${auth0Id}`);
};
