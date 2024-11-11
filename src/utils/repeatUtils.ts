import { Event } from '../types';

const isValidDate = (dateStr: string): boolean => {
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date.getTime());
};

const addDays = (dateStr: string, days: number): string => {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

const addMonths = (dateStr: string, months: number): string => {
  const date = new Date(dateStr);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().split('T')[0];
};

const addYears = (dateStr: string, years: number): string => {
  const date = new Date(dateStr);
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString().split('T')[0];
};

export const generateRepeatedEvents = (event: Event): Event[] => {
  if (!isValidDate(event.date)) return [];

  if (event.repeat.type === 'none') return [event];

  const endDate = event.repeat.endDate || '2025-06-30';

  if (new Date(endDate) < new Date(event.date)) {
    return [event];
  }

  const result: Event[] = [event];
  let currentDate = event.date;
  let count = 1;

  while (new Date(currentDate) <= new Date(endDate)) {
    let nextDate: string;

    switch (event.repeat.type) {
      case 'daily':
        nextDate = addDays(event.date, event.repeat.interval * count);
        break;
      case 'weekly':
        nextDate = addDays(event.date, event.repeat.interval * 7 * count);
        break;
      case 'monthly':
        nextDate = addMonths(event.date, event.repeat.interval * count);
        break;
      case 'yearly':
        nextDate = addYears(event.date, event.repeat.interval * count);
        break;
      default:
        return result;
    }

    if (new Date(nextDate) > new Date(endDate)) {
      break;
    }

    const repeatedEvent: Event = {
      ...event,
      id: `${event.id}-${count}`,
      date: nextDate,
    };

    result.push(repeatedEvent);
    currentDate = nextDate;
    count++;
  }

  return result;
};
