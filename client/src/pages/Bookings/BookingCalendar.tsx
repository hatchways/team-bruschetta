import * as React from 'react';
import 'date-fns';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function BookingCalendar(): JSX.Element {
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Calendar date={date} onChange={(newDate: any) => setDate(newDate)} />
    </MuiPickersUtilsProvider>
  );
}
