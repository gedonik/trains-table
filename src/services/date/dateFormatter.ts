import {parseISO} from "date-fns";
import {format, utcToZonedTime} from "date-fns-tz";

export const dateFormatting = (date: string | null) => {
    if (date && date !== '-' && date !== null) {
        const parsedTime = parseISO(date);

        const formatInTimeZone = (date: Date, fmt: string, tz: string) =>
            format(utcToZonedTime(date, tz),
                fmt,
                {timeZone: tz});

        return formatInTimeZone(parsedTime, 'dd.MM.yyyy HH:mm', 'UTC');
    } else {
        return '-';
    }
}

export function strToDate(str: string) {
    if (str !== '-') {
        const splitSpace = str.split(' ')
        const splitDots = splitSpace[0].split('.');
        [splitDots[0], splitDots[2]] = [splitDots[2], splitDots[0]];
        const result = splitDots.join(' ').replace(/ /g, '-');
        return `${result}T${splitSpace[1]}:00.000Z`;
    }
}