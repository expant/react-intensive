export type ValidateInputParams = {
  value: string;
};

export const validateInput = ({ value }: ValidateInputParams) => {
  if (!value) return { isValid: false, error: "empty" };

  const num = Number(value);

  if (isNaN(num)) return { isValid: false, error: "NaN" };

  return { isValid: true, validatedValue: num };
};
