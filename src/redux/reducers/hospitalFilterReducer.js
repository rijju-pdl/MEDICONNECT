import { hospitals_data } from "../../utils/data";
import {
  UPDATE_HOSPITAL_CITY_CHOSEN,
  UPDATE_HOSPITAL_SPECIALITY_CHOSEN,
  UPDATE_HOSPITAL_CURRENTLY_VIEWED_PAGE_NUM,
  UPDATE_HOSPITAL_ORDER,
  UPDATE_HOSPITAL_PREVIOUSLY_VIEWED_PAGE_NUMS,
  UPDATE_HOSPITAL_SORT,
  UPDATE_HOSPITAL_TOTAL_PAGE,
  UPDATE_FILTERED_HOSPITALS,
  UPDATE_NUM_OF_HOSPITALS_PER_PAGE,
  UPDATE_TOTAL_HOSPITALS,
} from "../actions/hospitalFilterActionTypes";

const initialState = {
  cityChosen: "",
  specialityChosen: "",
  filteredHospitals: hospitals_data,
  sort: "Name",
  currentlyViewedPageNum: 1,
  previouslyViewedPageNums: [1],
  numOfHospitalsPerPage: 6,
  order: "A-Z",
  totalPage: undefined,
  totalHospitals: undefined,
};

const hospitalFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOSPITAL_CITY_CHOSEN:
      return { ...state, cityChosen: action.payload };
    case UPDATE_HOSPITAL_SPECIALITY_CHOSEN:
      return { ...state, specialityChosen: action.payload };
    case UPDATE_FILTERED_HOSPITALS:
      return { ...state, filteredHospitals: action.payload };
    case UPDATE_HOSPITAL_SORT:
      return { ...state, sort: action.payload };
    case UPDATE_HOSPITAL_ORDER:
      return { ...state, order: action.payload };
    case UPDATE_HOSPITAL_TOTAL_PAGE:
      return { ...state, totalPage: action.payload };
    case UPDATE_HOSPITAL_CURRENTLY_VIEWED_PAGE_NUM:
      return { ...state, currentlyViewedPageNum: action.payload };
    case UPDATE_HOSPITAL_PREVIOUSLY_VIEWED_PAGE_NUMS:
      if (!state.previouslyViewedPageNums.includes(action.payload)) {
        return {
          ...state,
          previouslyViewedPageNums: [
            ...state.previouslyViewedPageNums,
            action.payload,
          ],
        };
      }
      return state;
    case UPDATE_TOTAL_HOSPITALS:
      return { ...state, totalHospitals: action.payload };
    case UPDATE_NUM_OF_HOSPITALS_PER_PAGE:
      return { ...state, numOfHospitalsPerPage: action.payload };
    default:
      return state;
  }
};

export default hospitalFilterReducer;
