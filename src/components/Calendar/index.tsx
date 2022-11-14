import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date : string] : {
    color: string;
    textColor: string;
    disable?: boolean;
    disableTouchEvent?: boolean;
  },
}


interface DayProps {
  dateString : string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

function Calendar({markedDates, onDayPress} : CalendarProps) {

  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather size={24}
          color={theme.COLORS.TEXT}
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }
      headerStyle={{
        backgroundColor: theme.COLORS.SHAPE,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.COLORS.TEXT_DETAILS,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.FONT_FAMILY.ARCHIVO_REGULAR,
        textDayHeaderFontFamily: theme.FONT_FAMILY.ARCHIVO_MEDIUM,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.COLORS.TITLE,
        textMonthFontFamily: theme.FONT_FAMILY.ARCHIVO_BOLD,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export { Calendar, DayProps, MarkedDateProps}