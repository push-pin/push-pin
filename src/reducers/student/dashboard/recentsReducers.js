import { GET_RECENTS, GET_RECENTS_PENDING, GET_RECENTS_ERROR } from '../../../actions/student/dashboard/recentsActions';

const initialState = {
  recents: [],
  loading: false,
  error: {}, 
  recent: 0
};

// function recentCounter(recentSubs) {
//   let recent = recentSubs.length;
//   //commenting this out for now and will come back to it later
//   // let recent = 0;
//   // const today = new Date();
//   // const todayObject = formattedDate(today);

//   // for(let i = 0; i < recentSubs.length; i++) {
//   //   const subDateObj = recentSubs[i].updatedAt;
//   //   if(todayObject.day - subDateObj.day >= 2) {
//   //     recent ++;
//   //   }
//   // }
//   return recent;
// }

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RECENTS:
      return { ...state, recents: action.payload, loading: false, 
        // recent: recentCounter(action.payload) 
      };
    case GET_RECENTS_PENDING:
      return { ...state, loading: true };
    case GET_RECENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
