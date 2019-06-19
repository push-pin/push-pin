import { createAction } from 'promise-middleware-redux';
import { getReadingResponses } from '../../../../../services/student/detail/readingSubmissionServices';

export const [
  fetchReadingResponses,
  FETCH_READING_RESPONSES,
  FETCH_READING_RESPONSES_PENDING,
  FETCH_READING_RESPONSES_ERROR
] = createAction('FETCH_READING_RESPONSES', getReadingResponses);
