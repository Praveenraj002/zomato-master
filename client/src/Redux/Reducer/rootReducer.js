import {combineReducers} from "redux"

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";

const rootReducer = combineReducers({restaurant});

export default rootReducer;