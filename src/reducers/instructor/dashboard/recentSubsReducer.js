import { GET_RECENT_SUBS, GET_RECENT_SUBS_PENDING, GET_RECENT_SUBS_ERROR } from '../../../actions/instructor/dashboard/recentSubsActions';

const initialState = {
  recentSubs: [],
  loading: false,
  error: {}, 
  recent: 0
};

function recentCounter(recentSubs) {
  let recent = recentSubs.length;
  return recent;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RECENT_SUBS:
      return { ...state, recentSubs: action.payload, loading: false, recent: recentCounter(action.payload) 
      };
    case GET_RECENT_SUBS_PENDING:
      return { ...state, loading: true };
    case GET_RECENT_SUBS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
