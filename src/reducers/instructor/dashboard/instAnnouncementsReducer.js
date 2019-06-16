import { GET_INST_ANNOUNCEMENTS, GET_INST_ANNOUNCEMENTS_PENDING, GET_INST_ANNOUNCEMENTS_ERROR } from '../../../actions/instructor/dashboard/instAnnouncementActions';

const initialState = {
  announcements: [],
  loading: false,
  error: {},
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
  switch(action.type) {
    case GET_INST_ANNOUNCEMENTS:
      return { ...state, announcements: action.payload, loading: false, unread: unreadCounter(action.payload) };
    case GET_INST_ANNOUNCEMENTS_PENDING:
      return { ...state, loading: true };
    case GET_INST_ANNOUNCEMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
