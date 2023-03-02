export interface Car {
    ordNumber: number,
    carNumber: string,
    trainIndex: string,
    trainNumber: string,
    carStatus: string,
    invoiceId: string,
    invoiceNumber: string,
    stateId: number,
    lastOperDt: string
}

export interface SortParams {
    columnName: string,
    direction: string
}

export interface CarsState {
    cars: Car[],
    loading: boolean,
    error: any,
}

export enum CarsActionTypes {
    SET_LOADING = 'SET_LOADING',
    FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
    FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
    EDIT_CAR = 'EDIT_CAR'
}

interface SetLoadingCarsAction {
    type: CarsActionTypes.SET_LOADING,
    payload: boolean
}

interface FetchCarsSuccessAction {
    type: CarsActionTypes.FETCH_CARS_SUCCESS;
    payload: Car[];
}

interface FetchCarsErrorAction {
    type: CarsActionTypes.FETCH_CARS_ERROR;
    payload: any;
}

interface EditCarAction {
    type: CarsActionTypes.EDIT_CAR;
    payload: {
        id: number,
        trainNumber: string,
        time: string,
        invoiceNumber: string,
        invoiceId: string
    };
}

export type CarsAction = SetLoadingCarsAction | FetchCarsSuccessAction | FetchCarsErrorAction | EditCarAction;