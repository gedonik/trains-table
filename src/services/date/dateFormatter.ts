import {formatInTimeZone} from "date-fns-tz";

export const dateFormatting = (date: string) => {
    if (date) {
        return formatInTimeZone(new Date(date), 'Etc/Universal', 'dd.MM.yyyy HH:mm');
    } else {
        return '-';
    }
}
