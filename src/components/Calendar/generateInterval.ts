import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from '@utils/getPlatformDate'
import theme from '@theme/theme';

export function generateInterval(start: DayProps, end: DayProps) {
    let interval: MarkedDateProps = {};

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
    .forEach((item) => {
        const date = format(getPlatformDate(item), 'yyyy-MM-dd');

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date ? theme.COLORS.RED : theme.COLORS.TEXT_IN_RED,
                textColor: start.dateString === date || end.dateString === date ? theme.COLORS.TEXT_IN_RED : theme.COLORS.RED,
            }
        }
    })

    return interval;
}