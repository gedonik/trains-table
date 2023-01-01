import {formatInTimeZone} from "date-fns-tz";

export const dateFormatting = (date) => {
    if (date !== null) {
        return formatInTimeZone(new Date(date), 'Etc/Universal', 'dd.MM.yyyy HH:mm');
    } else {
        return '-';
    }
}