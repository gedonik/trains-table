type headingType = {
    title: string,
    name: string
}

export const headings: Array<headingType> = [
    {title: '№ п/п', name: 'ordNumber'},
    {title: 'Номер вагона', name: 'carNumber'},
    {title: 'Индекс поезда', name: 'trainIndex'},
    {title: 'Номер поезда', name: 'trainNumber'},
    {title: 'Статус', name: 'carStatus'},
    {title: 'Дата-время операции', name: 'lastOperDt'},
    {title: '№ накладной', name: 'invoiceNumber'},
    {title: 'ИД накладной', name: 'invoiceId'},
    {title: 'stateId', name: 'stateId'},
]