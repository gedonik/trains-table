import {Dispatch} from "redux";
import {CarsAction, CarsActionTypes} from "../../types/cars";
import axios from "axios";

export const fetchCars = () => {
    return async (dispatch: Dispatch<CarsAction>) => {
        try {
            dispatch({type: CarsActionTypes.SET_LOADING, payload: true});
            const response = await axios.get('https://6356556e9243cf412f81f19c.mockapi.io/trains');
            dispatch({type: CarsActionTypes.FETCH_CARS_SUCCESS, payload: response.data});
            dispatch({type: CarsActionTypes.SET_LOADING, payload: false})
        } catch (e) {
            dispatch({
                type: CarsActionTypes.FETCH_CARS_ERROR,
                payload: e
            })
        } finally {
            dispatch({type: CarsActionTypes.SET_LOADING, payload: false})
        }
    }
}