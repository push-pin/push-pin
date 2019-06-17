import { GET_RECENT_SUBS, GET_RECENT_SUBS_PENDING, GET_RECENT_SUBS_ERROR } from '../../../actions/instructor/dashboard/recentSubsActions';

const initialState = {
  recentSubs: [],
  loading: false,
  error: {}, 
  unread: 0
};

function unreadCounter(recentSubs) {
  let unread = 0;
  for(let i = 0; i < recentSubs.length; i++) {
    if(!recentSubs[i].read) {
      unread++;
    }
  }
  return unread;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RECENT_SUBS:
      return { ...state, recentSubs: action.payload, loading: false, unread: unreadCounter(action.payload) };
    case GET_RECENT_SUBS_PENDING:
      return { ...state, loading: true };
    case GET_RECENT_SUBS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
