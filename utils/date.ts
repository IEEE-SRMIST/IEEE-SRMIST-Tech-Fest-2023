export const dateWithTimeZone = (
	timeZone: string,
	year: number,
	month: number,
	day: number,
	hour: number,
	minute: number,
	second: number
) => {
	let date = new Date(Date.UTC(year, month, day, hour, minute, second));
	let utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
	let tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
	let offset = utcDate.getTime() - tzDate.getTime();
	date.setTime(date.getTime() + offset);
	return date;
};
