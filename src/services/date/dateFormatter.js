export const dateFormat = (originDate) => {
    let newDate = '';
    if (originDate) {
        //Разделяем строку на массив 3-х элементов -  даты, времени, пояса.
        const splitStr = originDate.replace('T', ' ').replace('.', ' ').split(' ');
        //Разделям дату на год, месяц, число. Время на часы, минуты, секунды.
        const dateSplit = splitStr[0].split('-');
        const timeSplit = splitStr[1].split(':');
        //Меняем местами число и год.
        [dateSplit[0], dateSplit[2]] = [dateSplit[2], dateSplit[0]];
        //Итоговая строка даты и времени
        const dateResult = `${dateSplit[0]}.${dateSplit[1]}.${dateSplit[2]}`;
        const timeResult = `${timeSplit[0]}:${timeSplit[1]}`;

        newDate = `${dateResult} ${timeResult}`;
    }

    return newDate;
}