import {CarsAction, CarsActionTypes, CarsState} from "../../types/cars";

const initialState: CarsState = {
    cars: [],
    loading: false,
    error: null
}

export const carsReducer = (state = initialState, action: CarsAction): CarsState => {
    switch (action.type) {
        case CarsActionTypes.SET_LOADING:
            return {...state, loading: action.payload};
        case CarsActionTypes.FETCH_CARS_SUCCESS:
            return {...state, cars: action.payload};
        case CarsActionTypes.FETCH_CARS_ERROR:
            return {...state, error: action.payload.message};
        case CarsActionTypes.EDIT_CAR:
            const changedCars = state.cars.map(item =>
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
            return {...state, cars: [...changedCars]}
        default:
            return state;
    }
}