import { format } from 'date-fns';

export const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

export const timeOptions = Array.from({ length: 10 }, (_, i) => {
  const hour = 11 + i;
  return {
    value: `${hour}:00`,
    label: format(new Date().setHours(hour, 0, 0), 'h:mm aa'),
  };
});

export const guestsOptions = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1} Guest${i + 1 > 1 ? 's' : ''}`,
}));

export const tableOptions = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1} table${i + 1 > 1 ? 's' : ''}`,
}));

