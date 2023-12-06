import { FacilityAppStore } from "../../../../../../interfaces/facility.model";
import { DELETE_FACILITY_FAILED, DELETE_FACILITY_REQUEST, DELETE_FACILITY_SUCCESS, FETCH_FACILITE_FAILED, FETCH_FACILITE_REQUEST, FETCH_FACILITE_SUCCESS, FETCH_FACILITY_FAILED, FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FacilityAction, RESET_DELETE_FACILITY, RESET_UPDATE_FACILITY, UPDATE_FACILITY_FAILED, UPDATE_FACILITY_REQUEST, UPDATE_FACILITY_SUCCESS } from "../actions/facility.action";

const initialState: FacilityAppStore = new FacilityAppStore();


const facilityReducer = (state = initialState, action: FacilityAction) => {
    switch (action.type) {

        case FETCH_FACILITY_REQUEST:
            return {
                ...state,
                list: {
                    pending: true
                },
            } as typeof initialState;
        case FETCH_FACILITY_SUCCESS:
            return {
                ...state,
                list: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;
        case FETCH_FACILITY_FAILED:
            return {
                ...state,
                list: {
                    pending: false,
                    error: action.payload.error,

                },
            } as typeof initialState;

        case FETCH_FACILITE_REQUEST:
            return {
                ...state,
                update: {
                    pending: true,
                },
            } as typeof initialState;

        case FETCH_FACILITE_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;

        case FETCH_FACILITE_FAILED:
            return {
                ...state,
                update: {
                    pending: false,
                    error: action.payload.error,
                },
            } as typeof initialState;

        //UPDATE

        case UPDATE_FACILITY_REQUEST:
            return {
                ...state,
                update: {
                    result: null,
                    pending: true,
                    error: [],
                },
            } as typeof initialState;

        case UPDATE_FACILITY_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                    error: [],
                },
            } as typeof initialState;

        case UPDATE_FACILITY_FAILED:
            return {
                ...state,
                update: {
                    error: action.payload.error,
                    pending: false,
                },
            } as typeof initialState;
        case RESET_UPDATE_FACILITY:
            return {
                ...state,
                update: {
                    error: [],
                    pending: false,
                    result: null,
                },
            } as typeof initialState;
        case DELETE_FACILITY_REQUEST:
            return {
                ...state,
                delete: {
                    pending: true,
                },
            } as typeof initialState;
        case DELETE_FACILITY_SUCCESS:
            return {
                ...state,
                delete: {
                    result: action.payload.result,
                    pending: false,
                },
                list: {
                    result: state.list.result?.filter(
                        (item) => item.id !== action.payload.result
                    ),
                },
            } as typeof initialState;
        case DELETE_FACILITY_FAILED:
            return {
                ...state,
                delete: {
                    error: action.payload.result,
                    pending: false,
                },
            } as unknown as typeof initialState;
            case RESET_DELETE_FACILITY:
                return {
                  ...state,
                  delete: {
                    error: [],
                    pending: false,
                    result: null,
                  },
                } as typeof initialState;
                
        default:
            return state;
    }
}

export default facilityReducer;