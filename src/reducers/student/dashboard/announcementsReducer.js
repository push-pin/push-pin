import { GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_PENDING, GET_ANNOUNCEMENTS_ERROR } from '../../../actions/student/dashboard/announcementActions';

const initialState = {
  announcements: [],
  loading: false,
  error: '',
  unread: 0
};

function unreadCounter(announcements) {
  let unread = 0;
  for(let i = 0; i < announcements.length; i++) {
    if(!announcements[i].read) {
      unread++;
    }
  }
  return unread;
}

export default function reducer(state = initialState, action) {
  console.log(action.type, 'action');
  switch(action.type) {
    case GET_ANNOUNCEMENTS:
      return { ...state, announcements: action.payload, loading: false, unread: unreadCounter(action.payload) };
    case GET_ANNOUNCEMENTS_PENDING:
      return { ...state, loading: true };
    case GET_ANNOUNCEMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
