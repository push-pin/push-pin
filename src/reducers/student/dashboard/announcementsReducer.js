import { GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_PENDING, GET_ANNOUNCEMENTS_ERROR } from '../../../actions/student/dashboard/announcementActions';

const initialState = {
  announcements: [],
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
    case GET_ANNOUNCEMENTS:
      return { ...state, announcements: action.payload, loading: false, recent: recentCounter(action.payload) 
      };
    case GET_ANNOUNCEMENTS_PENDING:
      return { ...state, loading: true };
    case GET_ANNOUNCEMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
