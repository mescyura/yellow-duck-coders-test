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
					sx={{
						'& .MuiPickersCalendarHeader-label': {
							color: '#4640DE',
							fontWeight: 700,
							fontSize: '1rem',
						},
						'& .MuiPickersArrowSwitcher-button': {
							color: '#4640DE',
						},
						'& .MuiPickersDay-root.Mui-selected': {
							backgroundColor: '#4640DE !important',
							color: '#fff',
							fontWeight: 600,
							'&:hover': {
								backgroundColor: '#4640DE !important',
							},
						},
						'& .MuiPickersDay-today': {
							border: '1px solid #4640DE',
						},
						'& .MuiPickersMonth-root.Mui-selected': {
							backgroundColor: '#4640DE !important',
							color: '#fff',
							'&:hover': {
								backgroundColor: '#4640DE !important',
							},
						},
						'& .MuiPickersYear-root.Mui-selected': {
							backgroundColor: '#4640DE !important',
							color: '#fff',
							'&:hover': {
								backgroundColor: '#4640DE !important',
							},
						},
					}}
					slotProps={{
						day: {
							sx: {
								'&.MuiPickersDay-outsideMonth': {
									color: 'grey',
									opacity: 0.6,
								},
								'&:hover': {
									backgroundColor: 'rgba(70, 64, 222, 0.1)',
								},
								transition: 'all 0.2s ease',
							},
						},
					}}
				/>
			</div>
		</LocalizationProvider>
	);
}
