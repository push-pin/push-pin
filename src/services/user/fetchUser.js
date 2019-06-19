import { get } from '../request';

export const fetchUser = auth0Id => {
  return get(`/api/v1/user/auth/${auth0Id}`);
};
