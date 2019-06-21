import { GET_RECENT_SUBS, GET_RECENT_SUBS_PENDING, GET_RECENT_SUBS_ERROR } from '../../../actions/instructor/dashboard/recentSubsActions';
import formattedDate from '../../../utils/date-formatter';

const initialState = {
  recentSubs: [],
  loading: false,
  error: {}, 
  recent: 0
};

function recentCounter(recentSubs) {
  let recent = recentSubs.length;
  //commenting this out so that we can come back to it later
  // let recent = 0;
  // const today = new Date();
  // const todayObject = formattedDate(today);

  // for(let i = 0; i < recentSubs.length; i++) {
  //   const subDateObj = recentSubs[i].updatedAt;
  //   if(todayObject.day - subDateObj.day >= 2) {
  //     recent ++;
  //   }
  // }
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
