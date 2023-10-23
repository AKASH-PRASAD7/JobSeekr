import {
  GET_JOB,
  GET_JOB_BY_ID,
  APPLY_JOB,
  SEARCH_JOB,
  FILTER_JOB,
  LOADING,
  ERROR,
} from "./type";

export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/job`);
    const data = await res.json();
    dispatch({ type: GET_JOB, payload: data });
  } catch (err) {
    dispatch({ type: ERROR, payload: err });
  }
};

export const getJobById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/job/${id}`);
    const data = await res.json();
    dispatch({ type: GET_JOB_BY_ID, payload: data });
  } catch (err) {
    dispatch({ type: ERROR, payload: err });
  }
};

// export const applyJob = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: LOADING });
//         const res = await fetch(`${import.meta.env.VITE_BASE_URL}/applicant`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         });
//         const data = await res.json();
//         dispatch({ type: APPLY_JOB, payload: data });
//     } catch (err) {
//         dispatch({ type: ERROR, payload: err });
//     }
// }

export const searchJob = (search) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/job/search/${search}`
    );
    const data = await res.json();
    dispatch({ type: SEARCH_JOB, payload: data });
  } catch (err) {
    dispatch({ type: ERROR, payload: err });
  }
};

export const filterJob = (skills, experienceLevels) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const skillsQuery = skills.join("&skills=");
    const experienceLevelsQuery = experienceLevels.join("&experienceLevel=");

    const res = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/filter/query?skills=${skillsQuery}&experienceLevel=${experienceLevelsQuery}`
    );

    const data = await res.json();
    dispatch({ type: FILTER_JOB, payload: data });
  } catch (err) {
    dispatch({ type: ERROR, payload: err });
  }
};
