import {localData} from "../../data";
import {CarsAction, CarsState} from "../../types/cars";

const initialState: CarsState = {
    cars: localData,
    loading: false,
    error: null,
    searchValue: '',
    selectedPaginationNum: 10,
    sortParams: null,
    currentRow: null,
    editRowModal: false,
    paginatedArr: [],
}

export const carsReducer = (state = initialState, action: CarsAction): CarsState => {
    switch (action.type) {
        case 'SEARCH':
            return {...state, searchValue: action.payload};
        case 'SORT_COLUMNS':
            return {...state, sortParams: action.payload};
        case 'PAGINATION':
            return {
                ...state,
                paginatedArr: [...state.cars.slice(action.payload.firstContentIndex, action.payload.lastContentIndex)]
            };
        case 'SET_ROW':
            return {
                ...state,
                currentRow: state.cars.find(item => item.ordNumber === action.payload),
                editRowModal: true
            };
        case 'EDIT_ROW':
            const changedData = state.paginatedArr.map(item =>
                item.ordNumber === action.payload.id
                    ? {
                        ...item,
                        trainNumber: action.payload.trainNumber,
                        lastOperDt: action.payload.time,
                        invoiceNumber: action.payload.invoiceNumber,
                        invoiceId: action.payload.invoiceId
                    }
                    : item
            )
            return {...state, paginatedArr: [...changedData], editRowModal: false};
        case 'CANCEL_EDIT':
            return {...state, editRowModal: action.payload};
        default:
            return state;
    }
}