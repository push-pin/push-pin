import { GET_RECENTS, GET_RECENTS_PENDING, GET_RECENTS_ERROR } from '../../../actions/student/dashboard/recentsActions';

const initialState = {
  recents: [],
  loading: false,
  error: {}, 
  unread: 0
};

function unreadCounter(recents) {
  let unread = 0;
  for(let i = 0; i < recents.length; i++) {
    if(!recents[i].read) {
      unread++;
    }
  }
  return unread;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RECENTS:
      console.log(action.type, 'recents action');
      return { ...state, recents: action.payload, loading: false, unread: unreadCounter(action.payload) };
    case GET_RECENTS_PENDING:
      return { ...state, loading: true };
    case GET_RECENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
