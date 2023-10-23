import job from "./job/reducer";

import { combineReducers } from "redux";

const rootReducter = combineReducers({
  job,
});

export default rootReducter;
