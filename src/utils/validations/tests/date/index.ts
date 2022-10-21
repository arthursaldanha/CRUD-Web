import { isAfter, isValid } from 'date-fns';
import { parseDate } from '../../../date';

const isCheckingDate = (value: string) => {
  if (!value) return true;

  const currentDate = new Date();
  const formattedDate = parseDate(value);

  return (
    value?.length === 10 &&
    isValid(formattedDate) &&
    isAfter(currentDate, formattedDate)
  );
};

export { isCheckingDate };
