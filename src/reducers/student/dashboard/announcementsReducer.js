import { GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_PENDING, GET_ANNOUNCEMENTS_ERROR } from '../../../actions/student/dashboard/announcementActions';
import formattedDate from '../../../utils/date-formatter';

const initialState = {
  announcements: [],
  loading: false,
  error: {},
  recent: 0
};

function recentCounter(recentSubs) {
  let recent = 0;
  const today = new Date();
  const todayObject = formattedDate(today);

  for(let i = 0; i < recentSubs.length; i++) {
    const subDateObj = recentSubs[i].updatedAt;
    if(todayObject.day - subDateObj.day >= 2) {
      recent ++;
    }
  }
  return recent;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ANNOUNCEMENTS:
      return { ...state, announcements: action.payload, loading: false, recent: recentCounter(action.payload) };
    case GET_ANNOUNCEMENTS_PENDING:
      return { ...state, loading: true };
    case GET_ANNOUNCEMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
