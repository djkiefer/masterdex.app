import dexReducer from "./pokemon/dex";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dex: dexReducer
});

export default rootReducer;
