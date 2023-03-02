import {parseISO} from "date-fns";
import {format} from "date-fns-tz";

export const dateFormatting = (date: string | null) => {
    if (date && date !== '-' && date !== null) {
        const parsedTime = parseISO(date);
        const formatInTimeZone = (date: Date, fmt: string) => format(date, fmt)

        return formatInTimeZone(parsedTime, 'dd.MM.yyyy HH:mm');
    } else {
        return '-';
    }
}