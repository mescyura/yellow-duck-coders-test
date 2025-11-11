import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function Calendar() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className='w-full'>
				<DateCalendar
					showDaysOutsideCurrentMonth
					dayOfWeekFormatter={date => dayjs(date).format('ddd')}
					slotProps={{
						day: {
							sx: {
								'&.MuiPickersDay-outsideMonth': {
									color: 'grey',
									opacity: 0.6,
								},
                            },
                           
						},
						leftArrowIcon: { sx: { color: '#4640DE' } },
						rightArrowIcon: { sx: { color: '#4640DE' } },
					}}
				/>
			</div>
		</LocalizationProvider>
	);
}
