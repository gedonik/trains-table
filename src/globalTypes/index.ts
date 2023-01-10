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

export type DataType = {
    data: [] | Array<Car>
}
