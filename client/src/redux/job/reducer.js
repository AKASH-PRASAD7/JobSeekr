import {
  GET_JOB,
  GET_JOB_BY_ID,
  APPLY_JOB,
  LOADING,
  ERROR,
  SEARCH_JOB,
  FILTER_JOB,
} from "./type";

const initialState = {
  jobs: [],
  job: {},
  search_jobs: [],
  filter_jobs: [],
  applied: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        error: null,
        applied: false,
      };
    case GET_JOB_BY_ID:
      return {
        ...state,
        job: action.payload,
        loading: false,
        error: null,
        applied: false,
      };
    case APPLY_JOB:
      return {
        ...state,
        loading: false,
        error: null,
        applied: action.payload,
      };

    case SEARCH_JOB:
      return {
        ...state,
        search_jobs: action.payload,
        loading: false,
        error: null,
        applied: false,
      };

    case FILTER_JOB:
      return {
        ...state,
        filter_jobs: action.payload,
        loading: false,
        error: null,
        applied: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        applied: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        applied: false,
      };
    default:
      return state;
  }
};

export default reducer;
