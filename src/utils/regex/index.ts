import { isValidFullDate, parseDate } from "../date";

export const fullNameRegex =
  /^[A-Za-zÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúü]{2,} [A-Za-zÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúü]+(?: [A-Za-zÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúü]+)*$/;

export const phoneRegex =
  /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

export const numberRegex = /^[0-9]$/;

export const otpRegex = /\b\d{6}\b/;

export const unmask = (text: string) => text.replace(/[^a-zA-Z0-9]/g, '');

const unmaskByType = (key: string, value: any) => {
  const formattedValue = (value as string).trim();

  if (
    key === 'phone' ||
    key === 'cpf' ||
    key === 'cardNumber' ||
    key === 'holderDocument' ||
    key === 'expirationDate'
  )
    return unmask(formattedValue);

  if (isValidFullDate(formattedValue)) return parseDate(formattedValue);

  return formattedValue;
};

export const unmaskObject = <T>(object: T) => {
  try {
    return Object.fromEntries(
      Object.entries(object)
        .filter(([key]) => (object as any)[key] !== undefined)
        .map(([key, value]) => [key, unmaskByType(key, value)]),
    );
  } catch {
    return object;
  }
};

export const testNumberRegex = (number: string) => numberRegex.test(number);

export const testOtpRegex = (otp: string) => otpRegex.test(otp);
