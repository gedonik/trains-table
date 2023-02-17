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
    error: null | string,
    searchValue: string,
    selectedPaginationNum: number,
    sortParams: null | SortParams,
    currentRow: null | undefined | Car,
    editRowModal: boolean,
    paginatedArr: Car[]
}

export enum CarsActionTypes {
    SEARCH = 'SEARCH',
    SORT_COLUMNS = 'SORT_COLUMNS',
    PAGINATION = 'PAGINATION',
    SET_ROW = 'SET_ROW',
    EDIT_ROW = 'EDIT_ROW',
    CANCEL_EDIT = 'CANCEL_EDIT'
}

interface SearchCarsAction {
    type: CarsActionTypes.SEARCH,
    payload: string
}

interface SortColumnsCarsAction {
    type: CarsActionTypes.SORT_COLUMNS,
    payload: SortParams | null
}

interface PaginationCarsAction {
    type: CarsActionTypes.PAGINATION,
    payload: {
        firstContentIndex: number,
        lastContentIndex: number
    }
}

interface SetRowCarsAction {
    type: CarsActionTypes.SET_ROW,
    payload: number
}

interface EditRowCarsAction {
    type: CarsActionTypes.EDIT_ROW,
    payload: {
        id: number,
        trainNumber: string,
        time: string,
        invoiceNumber: string
        invoiceId: string
    }
}

interface CancelEditCarsAction {
    type: CarsActionTypes.CANCEL_EDIT,
    payload: boolean
}

export type CarsAction = SearchCarsAction | SortColumnsCarsAction | PaginationCarsAction | SetRowCarsAction |
    EditRowCarsAction | CancelEditCarsAction;