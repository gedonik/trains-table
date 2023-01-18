type headingType = {
    columnTitle: string,
    columnName: string
}

export const headings: Array<headingType> = [
    {columnTitle: '№ п/п', columnName: 'ordNumber'},
    {columnTitle: 'Номер вагона', columnName: 'carNumber'},
    {columnTitle: 'Индекс поезда', columnName: 'trainIndex'},
    {columnTitle: 'Номер поезда', columnName: 'trainNumber'},
    {columnTitle: 'Статус', columnName: 'carStatus'},
    {columnTitle: 'Дата-время операции', columnName: 'lastOperDt'},
    {columnTitle: '№ накладной', columnName: 'invoiceNumber'},
    {columnTitle: 'ИД накладной', columnName: 'invoiceId'},
    {columnTitle: 'stateId', columnName: 'stateId'},
]